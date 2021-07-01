# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Profile

    # CreateEmailCommandTest.
    class CreateEmailCommandTest < ActiveSupport::TestCase

      test "l'email è obbligatoria" do
        command = MatildaCore::Profile::CreateEmailCommand.new(
          user_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test "l'utente deve esistere realmente" do
        command = MatildaCore::Profile::CreateEmailCommand.new(
          user_uuid: SecureRandom.uuid,
          email: 'create_email_command@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test "l'email deve essere univoca" do
        command = MatildaCore::Profile::CreateEmailCommand.new(
          user_uuid: 'general',
          email: 'general@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test 'caso positivo' do
        command = MatildaCore::Profile::CreateEmailCommand.new(
          user_uuid: 'general',
          email: 'create_email_command@mail.com',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
