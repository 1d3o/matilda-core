# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # CreateEventTest.
    class CreateEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Memberships::CreateEvent.new(
          user_uuid: SecureRandom.uuid,
          group_uuid: SecureRandom.uuid,
          log_who: ''
        )
        assert event.saved?

        membership = MatildaCore::Membership.find_by(
          user_uuid: event.payload[:user_uuid],
          group_uuid: event.payload[:group_uuid]
        )
        assert_not_nil membership
      end

    end

  end

end
