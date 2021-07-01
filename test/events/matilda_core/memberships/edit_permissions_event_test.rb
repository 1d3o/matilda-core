# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # EditPermissionsEventTest.
    class EditPermissionsEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Memberships::EditPermissionsEvent.new(
          user_uuid: 'general',
          group_uuid: 'general',
          permissions: ['a', 'b', 'c'],
          log_who: ''
        )
        assert event.saved?

        membership = MatildaCore::Membership.find_by(
          user_uuid: event.payload[:user_uuid],
          group_uuid: event.payload[:group_uuid]
        )
        assert_not_nil membership
        assert_equal membership.permissions, event.payload[:permissions]
      end

    end

  end

end
