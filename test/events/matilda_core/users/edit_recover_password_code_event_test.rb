# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # EditRecoverPasswordCodeEventTest.
    class EditRecoverPasswordCodeEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::EditRecoverPasswordCodeEvent.new(
          user_uuid: 'users_edit_recover_password_code_event_1',
          recover_password_code: 'abcdef',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_equal user.recover_password_code, event.payload[:recover_password_code]
        assert_not_nil user.recover_password_code_time
      end

    end

  end

end
