# frozen_string_literal: true

module MatildaCore

  # ProfileController.
  class ProfileController < MatildaCore::ApplicationController

    before_action :session_present_check

    def index_view
      section_head_set(@session.user.complete_name, [{ label: I18n.t('matilda_core.titles.account_settings') }])
    end

    def edit_info_action
      command = command_manager(generate_edit_info_command)
      return unless command

      render_json_success({})
    end

    def edit_username_action
      command = command_manager(generate_edit_username_command)
      return unless command

      render_json_success({})
    end

    def create_email_action
      command = command_manager(generate_create_email_command)
      return unless command

      render_json_success({})
    end

    def remove_email_action
      command = command_manager(generate_remove_email_command)
      return unless command

      render_json_success({})
    end

    def toggle_email_primary_action
      command = command_manager(generate_toggle_email_primary_command)
      return unless command

      render_json_success({})
    end

    def edit_password_action
      command = command_manager(generate_edit_password_command)
      return unless command

      render_json_success({})
    end

    private

    def generate_edit_info_command
      command_params = params.permit(:name, :surname)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::EditInfoCommand.new(command_params)
    end

    def generate_edit_username_command
      command_params = params.permit(:username)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::EditUsernameCommand.new(command_params)
    end

    def generate_create_email_command
      command_params = params.permit(:email)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::CreateEmailCommand.new(command_params)
    end

    def generate_remove_email_command
      command_params = params.permit(:email)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::RemoveEmailCommand.new(command_params)
    end

    def generate_toggle_email_primary_command
      command_params = params.permit(:email)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::ToggleEmailPrimaryCommand.new(command_params)
    end

    def generate_edit_password_command
      command_params = params.permit(:password_old, :password, :password_confirmation)
      command_params[:user_uuid] = @session.user_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Profile::EditPasswordCommand.new(command_params)
    end

  end

end
