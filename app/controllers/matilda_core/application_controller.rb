# frozen_string_literal: true

module MatildaCore

  # ApplicationController.
  # Principale controller del progetto che puo' essere esteso da altri controller.
  # Utilizzare tre tipologie di azioni:
  # - view actions: azioni che renderizzano html (example 'index_view')
  # - api actions:  azioni che ritornano dati in json (example 'index_api')
  # - actions: azioni che eseguono operazioni (example 'login_action')
  class ApplicationController < ActionController::Base

    layout 'matilda_core/application'

    protect_from_forgery with: :exception

    skip_before_action :verify_authenticity_token

    before_action :set_locale

    def index
      if session_present?
        redirect_to matilda_core.groups_select_view_path
      else
        redirect_to matilda_core.authentication_login_view_path
      end
    end

    def helper_update_session_locale
      session_set unless @session
      @session&.locale(params[:locale].to_sym) if I18n.available_locales.include?(params[:locale].to_sym)
      session[:mat_locale] = params[:locale]
      render_json_success({ token: session_update })
    end

    def helper_update_menu_preference
      session[:mat_menupreference] = params[:value] == '1'
      render_json_success({})
    end

    # FUNZIONI DI GESTIONE MULTILINGUA
    ##############################################################################################################

    def set_locale
      session_set unless @session
      locale = @session&.locale || session[:mat_locale] || I18n.default_locale

      I18n.locale = locale
    end

    # FUNZIONI DI GESTIONE ELEMENTI VIEW
    ##############################################################################################################

    def sidebar_set(value)
      @_sidebar = value
    end

    def section_head_set(title, breadcrumbs)
      @_section_head = {
        title: title,
        breadcrumbs: breadcrumbs || []
      }
    end

    # FUNZIONI DI GESTIONE SESSIONE
    ##############################################################################################################

    # Funzione utilizzata per creare una nuova sessione.
    def session_create(session_uuid, user_uuid)
      @session = MatildaCore::Session.new
      @session.user_session_uuid(session_uuid)
      @session.user_uuid(user_uuid)
      session_update
    end

    # Funzione che aggiorna la sessione e ritorna il token con la sessione aggiornata.
    def session_update
      return unless @session

      # salvo sessione su cookie
      cookies.encrypted[:mat_session] = { value: @session.to_string, expires: MatildaCore.config.authentication_session_lifetime.from_now } if MatildaCore.config.authentication_session_lifetime
      session[:mat_session] = @session.to_string unless MatildaCore.config.authentication_session_lifetime

      # genero token sessione
      session_data = {}
      session_data[:token] = @session.to_string
      session_data[:exp] = 365.days.from_now.to_i
      JWT.encode(session_data, Rails.application.credentials.secret_key_base || 'matilda')
    end

    # Funzione utilizzata per distruggere una sessione quando l'utente esegue il logout.
    def session_destroy
      @session&.reset

      # elimino cookie sessione
      cookies.delete(:mat_session)
      session[:mat_session] = nil
    end

    # Funzione che imposta il gruppo utilizzato in sessione.
    def session_update_group(group_uuid)
      session_set unless @session

      @session.group_uuid(group_uuid) if group_uuid
      @session.group_reset unless group_uuid
      session_update
    end

    # Funzione utilizzata per verificare se esiste una sessione valida per l'utente.
    def session_present?(key = nil)
      session_set unless @session
      result = !@session.nil?
      result = !@session.data[key].nil? if key && result

      result
    end

    # Permette di verificare se un utente ha un determinato permesso in sessione.
    def session_permission_present?(permissions = [])
      return false unless session_present?

      permissions.each do |permission|
        return false unless @session.group_permissions.include?(permission)
      end

      true
    end

    # Funzione utilizzata per verificare la presenza di una sessione valida per l'utente.
    # Blocca la richiesta con un redirect se la sessione non e' valida.
    # Esempio: before_action :session_present_check
    def session_present_check(key = nil)
      session = session_set
      result = session[:result]
      result = !@session.data[key].nil? if result && key
      return true if result

      if session[:type] == 'api'
        json_errors(json_error('Token not valid'))
        render_json_fail
        return
      end

      redirect_to MatildaCore.config.authentication_session_invalid_custom_redirect || matilda_core.root_path
      false
    end

    # Funzione utilizzabile per settare una nuova sessione utente (@session).
    def session_set
      type = nil
      session_data = nil

      if request.headers['Authorization']
        type = 'api'
        token = request.headers['Authorization'] ? request.headers['Authorization'].split(' ').last : ''
        begin
          token_decoded = JWT.decode(token, Rails.application.credentials.secret_key_base || 'matilda')[0]
          session_data = token_decoded['token'].to_s
        rescue StandardError
          return { result: false, type: type }
        end
      else
        type = 'view'
        session_data = cookies.encrypted[:mat_session] || session[:mat_session]
        return { result: false, type: type } unless session_data
      end

      @session = MatildaCore::Session.new(session_data)

      { result: true, type: type }
    end

    ##############################################################################################################

    # Funzione che gestisce un comando e, se questo ha risultato negativo, rimanda l'errore al client.
    def command_manager(command)
      unless command.completed?
        json_errors_command(command)
        render_json_fail
        return false
      end

      command
    end

    # Funzione utilizzata per l'invio di risposte positive in JSON.
    def render_json_success(payload)
      response = { result: true, errors: json_errors, payload: nil }
      response[:payload] = payload if payload
      render json: response
    end

    # Funzione utilizzata per l'invio di risposte negative in JSON.
    def render_json_fail(payload = nil)
      response = { result: false, errors: json_errors, payload: payload }
      render json: response
    end

    # Funzione che aggiunge alla lista errori dela chiamata gli errori di un comando.
    def json_errors_command(command)
      command.errors.map { |e| json_errors(e) }
    end
    def json_errors_coomand(command)
      logger.info('Function "json_errors_coomand" is deprecated. Use "json_errors_command".')
      json_errors_command(command)
    end

    # Funzione che aggiunge un nuovo errore alla lista errori della chiamata.
    def json_errors(error = nil)
      @json_errors ||= []
      @json_errors.push(error) if error && !error[:message].blank?
      @json_errors
    end

    # Funzione che genera un errore a partire da un messaggio testuale.
    def json_error(message, code = nil)
      { message: message, code: code }
    end

  end

end
