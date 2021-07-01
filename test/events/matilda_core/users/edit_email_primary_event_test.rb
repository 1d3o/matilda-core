# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Users

    # EditEmailPrimaryEventTest.
    class EditEmailPrimaryEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Users::EditEmailPrimaryEvent.new(
          user_uuid: 'general',
          email: 'general_2@mail.com',
          primary: true,
          log_who: ''
        )
        assert event.saved?

        user_email = MatildaCore::UserEmail.find_by(email: event.payload[:email])
        assert_not_nil user_email
        assert user_email.primary
      end

      test 'deve salvare i dati corretti sul database 2' do
        event = MatildaCore::Users::EditEmailPrimaryEvent.new(
          user_uuid: 'general',
          email: 'general_2@mail.com',
          primary: false,
          log_who: ''
        )
        assert event.saved?

        user_email = MatildaCore::UserEmail.find_by(email: event.payload[:email])
        assert_not_nil user_email
        assert !user_email.primary
      end

    end

  end

end
