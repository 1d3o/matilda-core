# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # RemoveEventTest.
    class RemoveEventTest < ActiveSupport::TestCase

      test 'deve rimuovere i dati corretti sul database' do
        event = MatildaCore::Memberships::RemoveEvent.new(
          user_uuid: 'general',
          group_uuid: 'general',
          log_who: ''
        )
        assert event.saved?

        membership = MatildaCore::Membership.find_by(
          user_uuid: event.payload[:user_uuid],
          group_uuid: event.payload[:group_uuid]
        )
        assert_nil membership
      end

    end

  end

end
