# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Profile

    # EditUsernameCommandTest.
    class EditUsernameCommandTest < ActiveSupport::TestCase

      test "l'username è obbligatorio" do
        command = MatildaCore::Profile::EditUsernameCommand.new(
          user_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :username)
      end

      test "l'utente deve esistere realmente" do
        command = MatildaCore::Profile::EditUsernameCommand.new(
          user_uuid: SecureRandom.uuid,
          username: 'Pippo',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Profile::EditUsernameCommand.new(
          user_uuid: 'general',
          username: 'Pippo',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
