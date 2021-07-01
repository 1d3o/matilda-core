# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # RemoveMemberCommandTest.
    class RemoveMemberCommandTest < ActiveSupport::TestCase

      test 'il gruppo è obbligatorio' do
        command = MatildaCore::Memberships::RemoveMemberCommand.new(
          user_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :group_uuid)
      end

      test "l'utente è obbligatorio" do
        command = MatildaCore::Memberships::RemoveMemberCommand.new(
          group_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Memberships::RemoveMemberCommand.new(
          group_uuid: 'general',
          user_uuid: 'general',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
