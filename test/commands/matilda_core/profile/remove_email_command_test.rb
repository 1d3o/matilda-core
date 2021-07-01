# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Profile

    # RemoveEmailCommandTest.
    class RemoveEmailCommandTest < ActiveSupport::TestCase

      test "l'email è obbligatoria" do
        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: 'general',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test "l'utente deve esistere realmente" do
        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: SecureRandom.uuid,
          email: 'remove_email_command@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :user_uuid)
      end

      test "l'email deve esistere" do
        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: 'general',
          email: 'remove_email_command@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test "l'utente non deve rimanere senza email" do
        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: 'general',
          email: 'general_2@mail.com',
          log_who: ''
        )
        assert command.completed?

        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: 'general',
          email: 'general@mail.com',
          log_who: ''
        )
        assert_not command.completed?
        assert_command_error_code(command, :email)
      end

      test 'caso positivo' do
        command = MatildaCore::Profile::RemoveEmailCommand.new(
          user_uuid: 'general',
          email: 'general@mail.com',
          log_who: ''
        )
        assert command.completed?
      end

    end

  end

end
