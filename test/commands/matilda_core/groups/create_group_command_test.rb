# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Groups

    # CreateGroupCommandTest.
    class CreateGroupCommandTest < ActiveSupport::TestCase

      test 'il nome è obbligatorio' do
        command = MatildaCore::Groups::CreateGroupCommand.new
        assert_not command.completed?
        assert_command_error_code(command, :name)
      end

      test 'se è creato da un utente deve essere attiva la possibilità di crearli' do
        MatildaCore.config.groups_permit_creation_to_users = false

        command = MatildaCore::Groups::CreateGroupCommand.new(
          name: 'Nome gruppo',
          log_who: SecureRandom.uuid
        )
        assert_not command.completed?
        assert_command_error_code(command, :log_who)
      end

      test 'se è creato da un utente non deve essere superata la soglia massima di gruppi per utente' do
        MatildaCore.config.groups_max_number_per_user = 0

        command = MatildaCore::Groups::CreateGroupCommand.new(
          name: 'Nome gruppo',
          log_who: SecureRandom.uuid
        )
        assert_not command.completed?
        assert_command_error_code(command, :log_who)
      end

      test 'caso positivo' do
        MatildaCore.config.set_default_options

        command = MatildaCore::Groups::CreateGroupCommand.new(
          name: 'Nome gruppo',
          log_who: SecureRandom.uuid
        )
        assert command.completed?
      end

    end

  end

end
