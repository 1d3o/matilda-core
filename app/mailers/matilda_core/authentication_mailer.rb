# frozen_string_literal: true

module MatildaCore

  # AuthenticationMailer.
  class AuthenticationMailer < MatildaCore::ApplicationMailer

    default template_path: 'matilda_core/mailers/authentication'

    def recover_password(user_uuid)
      @user = MatildaCore::User.find_by(uuid: user_uuid)
      return unless @user

      mail(to: @user.email, subject: "Recover password - #{MatildaCore.config.global_title}")
    end

  end

end
