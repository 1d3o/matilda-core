# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Authentication

    # LoginCommandTest.
    class LoginCommandTest < ActiveSupport::TestCase

      test "l'username è obbligatorio" do
        command = MatildaCore::Authentication::LoginCommand.new(
          password: 'test'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username_email)
      end

      test 'la password è obbligatoria' do
        command = MatildaCore::Authentication::LoginCommand.new(
          username_email: 'test'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password)
      end

      test "l'username deve appartenere ad un utente esistente" do
        command = MatildaCore::Authentication::LoginCommand.new(
          username_email: 'test',
          password: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username_email)
      end

      test 'la password deve essere corretta' do
        command = MatildaCore::Authentication::LoginCommand.new(
          username_email: 'general',
          password: 'Password2!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password)
      end

      test 'caso positivo' do
        command = MatildaCore::Authentication::LoginCommand.new(
          username_email: 'general',
          password: 'Password1!'
        )
        assert command.completed?
      end

      test 'caso positivo con username email' do
        command = MatildaCore::Authentication::LoginCommand.new(
          username_email: 'general@mail.com',
          password: 'Password1!'
        )
        assert command.completed?
      end

    end

  end

end
