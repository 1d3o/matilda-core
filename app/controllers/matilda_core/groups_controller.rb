# frozen_string_literal: true

module MatildaCore

  # GroupsController.
  class GroupsController < MatildaCore::ApplicationController

    before_action :session_present_check

    def index_view
      if MatildaCore.config.groups_root_path
        redirect_to MatildaCore.config.groups_root_path
        return
      end

      @group = @session.group

      unless @group
        redirect_to matilda_core.groups_select_view_path
        return
      end

      section_head_set('Dashboard', [{ label: 'Dashboard' }])
      sidebar_set('matilda_core.groups')
    end

    def select_view
      @group = @session.group

      if @group
        redirect_to matilda_core.groups_index_view_path
        return
      end

      @groups = @session.user.groups.order('name ASC')
      sidebar_set('matilda_core.groups')
    end

    def select_action
      @group = @session.user.groups.find_by(uuid: params[:group_uuid])

      unless @group
        render_json_fail
        return
      end

      render_json_success(token: session_update_group(@group.uuid))
    end

    def unselect_action
      render_json_success(token: session_update_group(nil))
    end

    def create_action
      command = command_manager(generate_create_command)
      return unless command

      render_json_success({})
    end

    private

    def generate_create_command
      command_params = params.permit(:name)
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Groups::CreateGroupCommand.new(command_params)
    end

  end

end
