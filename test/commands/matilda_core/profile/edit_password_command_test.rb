# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Profile

    # EditPasswordCommandTest.
    class EditPasswordCommandTest < ActiveSupport::TestCase

      test 'la password attuale è obbligatoria' do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: 'general',
          password: 'Password1!',
          password_confirmation: 'Password1!',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_old)
      end

      test 'la password è obbligatoria' do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: 'general',
          password_old: 'Password1!',
          password_confirmation: 'Password1!',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :password)
      end

      test 'la password confermata è obbligatoria' do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: 'general',
          password_old: 'Password1!',
          password: 'Password1!',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_confirmation)
      end

      test 'la password e la conferma password devono essere uguali' do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: 'general',
          password_old: 'Password1!',
          password: 'Password1!',
          password_confirmation: 'Password2!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_confirmation)
      end

      test "l'utente deve esistere realmente" do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: SecureRandom.uuid,
          password_old: 'Password1!',
          password: 'Password1!',
          password_confirmation: 'Password1!',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Profile::EditPasswordCommand.new(
          user_uuid: 'general',
          password_old: 'Password1!',
          password: 'Password1!',
          password_confirmation: 'Password1!',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
