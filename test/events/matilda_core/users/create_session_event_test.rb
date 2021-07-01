# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # CreateSessionEventTest.
    class CreateSessionEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::CreateSessionEvent.new(
          session_uuid: SecureRandom.uuid,
          user_uuid: SecureRandom.uuid,
          ip_address: '127.0.0.1',
          log_who: ''
        )
        assert event.saved?

        user_session = MatildaCore::UserSession.find_by(uuid: event.payload[:session_uuid])
        assert_not_nil user_session
        assert_equal user_session.user_uuid, event.payload[:user_uuid]
        assert_equal user_session.ip_address, event.payload[:ip_address]
      end

    end

  end

end
