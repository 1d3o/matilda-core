# frozen_string_literal: true

module MatildaCore

  # Session.
  class Session

    attr_accessor :data

    def initialize(data = nil)
      if data
        data_parsed = JSON.parse(data).with_indifferent_access
        @data = validate_data(data_parsed)
        return
      end

      @data = initialize_data
    end

    def to_string
      @data.to_json
    end

    def to_hash
      @data
    end

    def reset
      @data = initialize_data
    end

    # Funzioni principali di gestione dei dati
    ######################################################################

    # Locale

    def locale(locale = nil)
      @data[:locale] = locale if locale

      @data[:locale]
    end

    # User session

    def user_session_uuid(user_session_uuid = nil)
      @data[:user_session_uuid] = user_session_uuid if user_session_uuid

      @data[:user_session_uuid]
    end

    # User

    def user_uuid(user_uuid = nil)
      if user_uuid && user = MatildaCore::User.find_by(uuid: user_uuid)
        @data[:user_uuid] = user_uuid
        @data[:user_complete_name] = user.complete_name
        @data[:user_email] = user.email
      end

      @data[:user_uuid]
    end

    def user_complete_name
      @data[:user_complete_name]
    end

    def user
      @user ||= MatildaCore::User.find_by(uuid: @data[:user_uuid])
    end

    # Group

    def group_uuid(group_uuid = nil)
      if group_uuid && group = MatildaCore::Group.find_by(uuid: group_uuid)
        @data[:group_uuid] = group_uuid
        @data[:group_name] = group.name
        @data[:group_permissions] = membership.permissions
      end

      @data[:group_uuid]
    end

    def group_reset
      @data[:group_uuid] = nil
      @data[:group_name] = nil
      @data[:group_permissions] = []
    end

    def group
      @group ||= MatildaCore::Group.find_by(uuid: @data[:group_uuid])
    end

    def group_permissions
      @data[:group_permissions] || []
    end

    def group_name
      @data[:group_name]
    end

    # Membership

    def membership
      @membership ||= MatildaCore::Membership.find_by(group_uuid: group_uuid, user_uuid: user_uuid)
    end

    # Custom

    def set(key, value)
      @data[key] = value
    end

    def get(key)
      @data[key]
    end

    ######################################################################

    protected

    def initialize_data
      {}
    end

    def validate_data(data)
      raise 'Data not valid' unless data&.is_a?(Hash)

      data
    end

  end

end
