# frozen_string_literal: true

module MatildaCore

  module Authentication

    # RecoverPasswordCommand.
    class RecoverPasswordCommand < MatildaCore::ApplicationCommand

      attr_reader :user_uuid

      validates :username_email,
                presence: true, type: :string, blank: false,
                err: I18n.t('matilda_core.messages.username_email_not_valid')

      validates :log_who, type: :string

      to_normalize_params do
        params[:username_email] = params[:username_email].downcase
      end

      to_validate_logic do
        user = MatildaCore::User.find_by(username: params[:username_email])
        user ||= MatildaCore::User.joins(:user_emails).find_by(matilda_core_user_emails: { email: params[:username_email] })

        unless user
          err(I18n.t('matilda_core.messages.username_email_not_valid'), code: :username_email)
          break
        end

        Rails.logger.info "RecoverPasswordCommand: params[:username_email] = #{user.uuid}"

        @user_uuid = user.uuid
      end

      to_initialize_events do
        event = MatildaCore::Users::EditRecoverPasswordCodeEvent.new(
          user_uuid: @user_uuid,
          recover_password_code: [*('0'..'9')].sample(6).join,
          log_who: params[:log_who]
        )
        internal_error && break unless event.saved?
      end

    end

  end

end
