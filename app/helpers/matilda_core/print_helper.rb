# frozen_string_literal: true

module MatildaCore

  # PrintHelper.
  module PrintHelper

    def print_date(date, format = MatildaCore.config.global_date_format)
      return unless date

      date.strftime(format)
    end

    def print_config_locale(label)
      return label unless label.include?('locale.')
      I18n.t(label.split('locale.').last, default: label)
    end

  end

end
