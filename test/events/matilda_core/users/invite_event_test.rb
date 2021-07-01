# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # InviteEventTest.
    class InviteEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::InviteEvent.new(
          user_uuid: SecureRandom.uuid,
          name: 'Gino',
          surname: 'Simoni',
          email: 'users_invite_event@mail.com',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_not_nil user.username
        assert_equal user.name, event.payload[:name]
        assert_equal user.surname, event.payload[:surname]
        assert_nil user.password
      end

    end

  end

end
