# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # RemoveSessionEventTest.
    class RemoveSessionEventTest < ActiveSupport::TestCase

      test 'deve aggiornare i dati corretti sul database' do
        event = MatildaCore::Users::RemoveSessionEvent.new(
          session_uuid: 'general',
          log_who: ''
        )
        assert event.saved?

        user_session = MatildaCore::UserSession.find_by(uuid: event.payload[:session_uuid])
        assert_not_nil user_session
        assert_not_nil user_session.closed_at
        assert_equal user_session.closed_at.to_date, Time.now.to_date
      end

    end

  end

end
