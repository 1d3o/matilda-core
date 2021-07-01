# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # EditMemberPermissionsCommandTest.
    class EditMemberPermissionsCommandTest < ActiveSupport::TestCase

      test 'il gruppo è obbligatorio' do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          user_uuid: 'general',
          permissions: [],
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :group_uuid)
      end

      test "l'utente è obbligatorio" do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          group_uuid: 'general',
          permissions: [],
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'i permessi sono obbligatori' do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          user_uuid: 'general',
          group_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :permissions)
      end

      test "l'utente deve esistere" do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          user_uuid: SecureRandom.uuid,
          group_uuid: 'general',
          permissions: [],
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test "l'utente deve appartenere al gruppo" do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          group_uuid: 'general',
          user_uuid: 'memberships__edit_member_permissions_command_1',
          permissions: [],
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Memberships::EditMemberPermissionsCommand.new(
          group_uuid: 'general',
          user_uuid: 'general',
          permissions: [],
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
