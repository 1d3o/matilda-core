# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Authentication

    # UpdatePasswordCommandTest.
    class UpdatePasswordCommandTest < ActiveSupport::TestCase

      test "l'user uuid è obbligatorio" do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          recover_password_code: '123456',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'il recover password code è obbligatorio' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :recover_password_code)
      end

      test 'la password è obbligatoria' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: '123456',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password)
      end

      test 'la conferma password è obbligatoria' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: '123456',
          password: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_confirmation)
      end

      test 'la password e la conferma password devono essere uguali' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: '123456',
          password: 'Password1!',
          password_confirmation: 'Password2!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_confirmation)
      end

      test "l'utente deve esistere" do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'pippo22',
          recover_password_code: '123456',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test 'il codice deve essere valido' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: 'sbagliatissimo',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :recover_password_code)
      end

      test 'il codice non deve essere scaduto' do
        Timecop.travel(Time.now + 35.minutes)

        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: '123456',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :recover_password_code)

        Timecop.return
      end

      test 'caso positivo' do
        command = MatildaCore::Authentication::UpdatePasswordCommand.new(
          user_uuid: 'authentication_update_password_command_1',
          recover_password_code: '123456',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert command.completed?
      end

    end

  end

end
