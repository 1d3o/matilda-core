# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Groups

    # CreateEventTest.
    class CreateEventTest < ActiveSupport::TestCase

      test 'deve salvare i dati corretti sul database' do
        event = MatildaCore::Groups::CreateEvent.new(
          group_uuid: SecureRandom.uuid,
          name: 'Nome gruppo',
          log_who: ''
        )
        assert event.saved?

        group = MatildaCore::Group.find_by(uuid: event.payload[:group_uuid])
        assert_not_nil group
        assert_equal group.name, event.payload[:name]
      end

    end

  end

end
