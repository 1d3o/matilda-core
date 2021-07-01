# frozen_string_literal: true

module MatildaCore

  # MembershipsController.
  class MembershipsController < MatildaCore::ApplicationController

    before_action do
      if session_present_check(:group_uuid)
        redirect_to matilda_core.root_path unless session_permission_present?(['matilda_core.memberships'])
      end
    end

    def index_view
      sidebar_set('matilda_core.memberships')
      section_head_set(I18n.t('matilda_core.titles.users'), [{ label: I18n.t('matilda_core.titles.users') }])

      @users = @session.group.users
      @users = @users.where('lower(name) LIKE ? OR lower(surname) LIKE ?', "%#{params[:s].downcase}%", "%#{params[:s].downcase}%") unless params[:s].blank?
      @users = @users.order('surname ASC, name ASC').page(params[:page]).per(15)
    end

    def invitation_view
      sidebar_set('matilda_core.memberships')
      section_head_set(I18n.t('matilda_core.titles.invite_user'), [{ label: I18n.t('matilda_core.titles.users'), url: matilda_core.memberships_index_view_path }, { label: I18n.t('matilda_core.titles.invite_user') }])
    end

    def manage_view
      @user = @session.group.users.find_by(uuid: params[:user_uuid])
      @membership = @session.group.memberships.find_by(user_uuid: params[:user_uuid])

      sidebar_set('matilda_core.memberships')
      section_head_set(@user.complete_name, [{ label: I18n.t('matilda_core.titles.users'), url: matilda_core.memberships_index_view_path }, { label: I18n.t('matilda_core.titles.manage_user') }])
    end

    def invitation_action
      command = command_manager(generate_invitation_command)
      return unless command

      render_json_success({})
    end

    def edit_permissions_action
      command = command_manager(generate_edit_permissions_command)
      return unless command

      session_update_group(@session.group_uuid) # aggiorno la sessione per aggiornare i permessi dell'utente
      render_json_success({})
    end

    def edit_permissions_role_action
      command = command_manager(generate_edit_permissions_role_command)
      return unless command

      session_update_group(@session.group_uuid) # aggiorno la sessione per aggiornare i permessi dell'utente
      render_json_success({})
    end

    def remove_action
      command = command_manager(generate_remove_command)
      return unless command

      render_json_success({})
    end

    private

    def generate_invitation_command
      command_params = params.permit(:name, :surname, :email)
      command_params[:group_uuid] = @session.group_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Memberships::InviteMemberCommand.new(command_params)
    end

    def generate_edit_permissions_command
      command_params = params.permit(:user_uuid, permissions: [])
      command_params[:group_uuid] = @session.group_uuid
      command_params[:log_who] = @session.user_uuid
      command_params[:permissions] = command_params[:permissions] || []
      MatildaCore::Memberships::EditMemberPermissionsCommand.new(command_params)
    end

    def generate_edit_permissions_role_command
      command_params = params.permit(:user_uuid, :role)
      command_params[:group_uuid] = @session.group_uuid
      command_params[:log_who] = @session.user_uuid
      command_params[:permissions] = command_params[:permissions] || []
      MatildaCore::Memberships::EditMemberPermissionsRoleCommand.new(command_params)
    end

    def generate_remove_command
      command_params = params.permit(:user_uuid)
      command_params[:group_uuid] = @session.group_uuid
      command_params[:log_who] = @session.user_uuid
      MatildaCore::Memberships::RemoveMemberCommand.new(command_params)
    end

  end

end
