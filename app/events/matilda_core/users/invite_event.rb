# frozen_string_literal: true

module MatildaCore

  module Users

    # InviteEvent.
    class InviteEvent < MatildaCore::ApplicationEvent

      name_is :matilda_core_users_invite

      payload_attributes_are :user_uuid, :name, :surname, :email, :log_who

      extras_attributes_are :with_notification_invite

      to_write_event do
        set_not_saved unless save_event && MatildaCore::User.create(
          uuid: payload[:user_uuid],
          username: SecureRandom.uuid,
          name: payload[:name],
          surname: payload[:surname]
        )
      end

    end

  end

end
