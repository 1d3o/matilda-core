# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Profile

    # EditInfoCommandTest.
    class EditInfoCommandTest < ActiveSupport::TestCase

      test 'il nome è obbligatorio' do
        command = MatildaCore::Profile::EditInfoCommand.new(
          user_uuid: 'general',
          surname: 'Pippo',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :name)
      end

      test 'il cognome è obbligatorio' do
        command = MatildaCore::Profile::EditInfoCommand.new(
          user_uuid: 'general',
          name: 'Pippo',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :surname)
      end

      test "l'utente deve esistere realmente" do
        command = MatildaCore::Profile::EditInfoCommand.new(
          user_uuid: SecureRandom.uuid,
          name: 'Pippo',
          surname: 'Pippo',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Profile::EditInfoCommand.new(
          user_uuid: 'general',
          name: 'Pippo',
          surname: 'Pippo',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
