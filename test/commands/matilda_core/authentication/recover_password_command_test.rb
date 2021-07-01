# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Authentication

    # RecoverPasswordCommandTest.
    class RecoverPasswordCommandTest < ActiveSupport::TestCase

      test "l'username è obbligatorio" do
        command = MatildaCore::Authentication::RecoverPasswordCommand.new
        assert_not command.completed?
        assert_command_error_code(command, :username_email)
      end

      test "l'username deve appartenere ad un utente esistente" do
        command = MatildaCore::Authentication::RecoverPasswordCommand.new(
          username_email: 'test'
        )
        assert_not command.completed?
        assert_command_error_code(command, :username_email)
      end

      test 'caso positivo' do
        command = MatildaCore::Authentication::RecoverPasswordCommand.new(
          username_email: 'general'
        )
        assert command.completed?
      end

    end

  end

end
