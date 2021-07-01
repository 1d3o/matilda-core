# frozen_string_literal: true

module MatildaCore

  # AuthenticationController.
  class AuthenticationController < MatildaCore::ApplicationController

    layout 'matilda_core/authentication'

    # View
    #######################################################

    def login_view
      redirect_to matilda_core.root_path if session_present?
    end

    def signup_view
      redirect_to matilda_core.root_path if session_present?
      redirect_to matilda_core.authentication_login_view_path unless MatildaCore.config.authentication_permit_signup
    end

    def recover_password_view
      # auto eseguo la richiesta se ho l'uuid dell'utente come prametro
      if params[:u] && user = MatildaCore::User.find_by(uuid: params[:u])
        command = generate_recover_password_command(username_email: user.email)

        if command.completed?
          session[:mat_core_authentication_user_uuid] = command.user_uuid
          redirect_to matilda_core.authentication_recover_password_complete_view_path
        end 
      end
    end

    def recover_password_complete_view; end

    def update_password_view
      @user_uuid = params[:user_uuid] || session[:mat_core_authentication_user_uuid]
    end

    def update_password_complete_view; end

    # Actions
    #######################################################

    def login_action
      command = command_manager(generate_login_command)
      return unless command

      user = MatildaCore::User.find_by(uuid: command.user_uuid)
      render_json_success(token: create_auth_session(command.session_uuid, command.user_uuid), user: user.serialize_authentication)
    end

    def signup_action
      command = command_manager(generate_signup_command)
      return unless command

      user = MatildaCore::User.find_by(uuid: command.user_uuid)
      render_json_success(token: create_auth_session(command.session_uuid, command.user_uuid), user: user.serialize_authentication)
    end

    def recover_password_action
      command = command_manager(generate_recover_password_command)
      return unless command

      session[:mat_core_authentication_user_uuid] = command.user_uuid
      render_json_success(user_uuid: command.user_uuid)
    end

    def update_password_action
      command = command_manager(generate_update_password_command)
      return unless command

      render_json_success({})
    end

    def logout_action
      session_set

      command = command_manager(generate_logout_command)
      return unless command

      session_destroy
      render_json_success({})
    end

    private

    def create_auth_session(session_uuid, user_uuid)
      auth_session = session_create(session_uuid, user_uuid)

      group = nil
      group = @session.user.groups.order('name ASC').first if MatildaCore.config.authentication_login_group_selection == :first
      group = @session.user.groups.order('name ASC').last if MatildaCore.config.authentication_login_group_selection == :last
      auth_session = session_update_group(group.uuid) if group

      auth_session
    end

    def generate_login_command
      command_params = params.permit(:username_email, :password)
      command_params[:ip_address] = request.remote_ip
      MatildaCore::Authentication::LoginCommand.new(command_params)
    end

    def generate_signup_command
      command_params = params.permit(:name, :surname, :email, :username, :password, :password_confirmation, :privacy)
      command_params[:ip_address] = request.remote_ip
      MatildaCore::Authentication::SignupCommand.new(command_params)
    end

    def generate_recover_password_command(command_params = nil)
      command_params ||= params.permit(:username_email)
      MatildaCore::Authentication::RecoverPasswordCommand.new(command_params)
    end

    def generate_update_password_command
      command_params = params.permit(:user_uuid, :recover_password_code, :password, :password_confirmation)
      MatildaCore::Authentication::UpdatePasswordCommand.new(command_params)
    end

    def generate_logout_command
      command_params = { session_uuid: @session&.user_session_uuid }
      MatildaCore::Authentication::LogoutCommand.new(command_params)
    end

  end

end
