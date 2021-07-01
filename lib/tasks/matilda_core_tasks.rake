# frozen_string_literal: true

require 'csv'
require 'rest-client'

namespace :matilda_core do
  namespace :install do
    desc "Installa le dipendenze front-end dall'engine all'applicazione principale"
    task :front, :environment do |_task, args|
      src = "#{MatildaCore::Engine.root}/front"
      dst = "#{Rails.root}/vendor/matilda_core"
      FileUtils.copy_entry(src, dst)
    end

    desc "Installa le traduzioni dell'applicativo a partire da una sorgente impostato in configurazione"
    task :locales, :environment do |_task, args|
      # eseguo import initializer Matilda per caricamento configurazione applicazione
      require "#{Rails.root}/config/initializers/matilda_core.rb"

      locales_source_type = MatildaCore.config.locales_source_type
      locales_source_value = MatildaCore.config.locales_source_value
      if locales_source_value && locales_source_type
        csv_file_path = nil
        csv_file_path_to_delete = false

        # ottengo la path del csv con le lingue
        if locales_source_type == :gdrive_spreadsheet_key
          csv_file_path_to_delete = true
          download_url = "https://docs.google.com/spreadsheets/d/#{locales_source_value}/export?format=csv"
          download_path = "#{Rails.root}/tmp/matilda_core_temporary_locales.csv"
          download_response = RestClient.get(download_url)
          File.write(download_path, download_response.body.force_encoding("UTF-8"))
          csv_file_path = download_path
        elsif locales_source_type == :csv_file_path
          csv_file_path = locales_source_value
        end

        # esporto le lingue nei corrispondenti file di traduzione di rails
        if csv_file_path
          yaml_data_per_lang = {}

          csv_text = File.read(csv_file_path)
          csv = CSV.parse(csv_text, headers: true)
          csv.each do |row|
            row_hash = row.to_hash
            languages = row_hash.keys.reject { |k| ['SISTEMA', 'GRUPPO', 'CHIAVE'].include?(k) }

            languages.each do |language|
              yaml_data_per_lang[language] = {} unless yaml_data_per_lang[language]
              yaml_data_per_lang[language][row_hash['SISTEMA']] = {} unless yaml_data_per_lang[language][row_hash['SISTEMA']]
              yaml_data_per_lang[language][row_hash['SISTEMA']][row_hash['GRUPPO']] = {} unless yaml_data_per_lang[language][row_hash['SISTEMA']][row_hash['GRUPPO']]
              yaml_data_per_lang[language][row_hash['SISTEMA']][row_hash['GRUPPO']][row_hash['CHIAVE']] = row_hash[language]
            end
          end

          yaml_data_per_lang.each do |lang, data|
            yaml_obj = {}
            yaml_obj[lang.downcase] = data
            File.write("#{Rails.root}/config/locales/#{lang.downcase}.yml", yaml_obj.to_yaml)
          end

          File.delete(csv_file_path) if File.exist?(csv_file_path) && csv_file_path_to_delete
        end
      end
    end

  end
end
