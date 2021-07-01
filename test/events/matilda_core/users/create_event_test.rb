# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # CreateEventTest.
    class CreateEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::CreateEvent.new(
          user_uuid: SecureRandom.uuid,
          username: 'users_create_event_1',
          name: 'Gino',
          surname: 'Simoni',
          password: 'Gabbiano22',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_equal user.username, event.payload[:username]
        assert_equal user.name, event.payload[:name]
        assert_equal user.surname, event.payload[:surname]
        assert_equal user.password, event.payload[:password]
      end

    end

  end

end
