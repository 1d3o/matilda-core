# frozen_string_literal: true

require 'test_helper'

module MatildaCore

  module Authentication

    # LogoutCommandTest.
    class LogoutCommandTest < ActiveSupport::TestCase

      test "l'uuid della sessione è obbligatorio" do
        command = MatildaCore::Authentication::LogoutCommand.new
        assert_not command.completed?
        assert_command_error_code(command, :session_uuid)
      end

      test 'caso positivo' do
        command = MatildaCore::Authentication::LogoutCommand.new(
          session_uuid: 'general'
        )
        assert command.completed?
      end

    end

  end

end
