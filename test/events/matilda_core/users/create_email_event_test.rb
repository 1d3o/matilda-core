# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # CreateEmailEventTest.
    class CreateEmailEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::CreateEmailEvent.new(
          user_uuid: SecureRandom.uuid,
          email: 'users_add_email_event_1@mail.com',
          primary: true,
          log_who: ''
        )
        assert event.saved?

        user_email = MatildaCore::UserEmail.find_by(email: event.payload[:email])
        assert_not_nil user_email
        assert_equal user_email.user_uuid, event.payload[:user_uuid]
        assert_equal user_email.primary, event.payload[:primary]
      end

    end

  end

end
