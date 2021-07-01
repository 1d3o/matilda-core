# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # EditPasswordEventTest.
    class EditPasswordEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::EditPasswordEvent.new(
          user_uuid: 'users_edit_password_event_1',
          password: 'abcdef',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_equal user.password, event.payload[:password]
      end

    end

  end

end
