# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Authentication

    # SignupCommandTest.
    class SignupCommandTest < ActiveSupport::TestCase

      test "l'username è obbligatorio" do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username)
      end

      test "l'username deve avere il giusto formato" do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'prova con spazi',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username)
      end

      test "l'email è obbligatoria" do
        command = MatildaCore::Authentication::SignupCommand.new(
          username: 'test',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test "l'email deve avere il giusto formato" do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'prova con spazio',
          username: 'test',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test 'il nome è obbligatorio' do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :name)
      end

      test 'il cognome è obbligatorio' do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'test',
          name: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :surname)
      end

      test 'la password è obbligatoria' do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'test',
          name: 'test',
          surname: 'test',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password)
      end

      test 'le password devono coincidere' do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'test',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password2!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :password_confirmation)
      end

      test "l'email deve essere aggiornata dal comando in downcase" do
        email = 'TEST@mail.it'
        command = MatildaCore::Authentication::SignupCommand.new(
          email: email,
          username: 'test',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_equal command.params[:email], email.downcase
      end

      test "l'username deve essere univoco" do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'test@mail.it',
          username: 'general',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username)
      end

      test "l'email deve essere univoca" do
        command = MatildaCore::Authentication::SignupCommand.new(
          email: 'general@mail.com',
          username: 'test',
          name: 'test',
          surname: 'test',
          password: 'Password1!',
          password_confirmation: 'Password1!'
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

    end

  end

end
