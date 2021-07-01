# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Memberships

    # InviteMemberCommandTest.
    class InviteMemberCommandTest < ActiveSupport::TestCase

      test 'il gruppo è obbligatorio' do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          name: 'Nome',
          surname: 'Cognome',
          email: 'email@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :group_uuid)
      end

      test 'il nome è obbligatorio' do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          group_uuid: SecureRandom.uuid,
          surname: 'Cognome',
          email: 'email@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :name)
      end

      test 'il cognome è obbligatorio' do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          group_uuid: SecureRandom.uuid,
          name: 'Nome',
          email: 'email@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :surname)
      end

      test "l'email è obbligatoria" do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          group_uuid: SecureRandom.uuid,
          name: 'Nome',
          surname: 'Cognome',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test "l'utente non deve essere già parte del gruppo" do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          group_uuid: 'general',
          name: 'Nome',
          surname: 'Cognome',
          email: 'general@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test 'caso positivo' do
        command = MatildaCore::Memberships::InviteMemberCommand.new(
          group_uuid: 'general',
          name: 'Nome',
          surname: 'Cognome',
          email: 'memberships_invite_member_command_999@mail.com',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
