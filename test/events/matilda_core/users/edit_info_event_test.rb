# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # EditInfoEventTest.
    class EditInfoEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::EditInfoEvent.new(
          user_uuid: 'general',
          name: 'Pippo nome',
          surname: 'Pippo cognome',
          log_who: ''
        )
        assert event.saved?

        user = MatildaCore::User.find_by(uuid: event.payload[:user_uuid])
        assert_not_nil user
        assert_equal user.name, event.payload[:name]
        assert_equal user.surname, event.payload[:surname]
      end

    end

  end

end
