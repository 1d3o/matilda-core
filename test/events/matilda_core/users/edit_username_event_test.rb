# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # EditUsernameEventTest.
    class EditUsernameEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::EditUsernameEvent.new(
          user_uuid: 'general',
          username: 'general_new_username',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_equal user.username, event.payload[:username]
      end

    end

  end

end
