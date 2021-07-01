# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # RemoveEmailEventTest.
    class RemoveEmailEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::RemoveEmailEvent.new(
          user_uuid: 'general',
          email: 'general@mail.com',
          log_who: ''
        )
        assert event.saved?

        user_email = MatildaCore::UserEmail.find_by(email: event.payload[:email])
        assert_nil user_email
      end

    end

  end

end
