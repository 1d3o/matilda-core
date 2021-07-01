# frozen_string_literal: true

module MatildaCore

  module Memberships

    # InviteMemberCommand.
    # Invita un utente ad unirsi ad un gruppo.
    class InviteMemberCommand < MatildaCore::ApplicationCommand

      attr_reader :user_uuid

      validates :group_uuid,
                presence: true, type: :string, blank: false,
                err: 'Gruppo non valido'

      validates :name,
                presence: true, type: :string, blank: false,
                err: 'Nome non valido'

      validates :surname,
                presence: true, type: :string, blank: false,
                err: 'Cognome non valido'

      validates :email,
                presence: true, type: :string, blank: false,
                regex: MatildaCore::User::EMAIL_REGEX,
                err: 'Email non valida'

      validates :log_who, type: :string
      validates :_with_notification_invite, type: :boolean

      to_normalize_params do
        params[:email] = params[:email].downcase
        params[:_with_notification_invite] = params[:_with_notification_invite].nil? ? true : params[:_with_notification_invite]
      end

      to_validate_logic do
        @user_uuid = MatildaCore::UserEmail.find_by(email: params[:email])&.user_uuid

        # se l'utente esiste gia' verifico che non sia gia' dentro il gruppo
        if @user_uuid && MatildaCore::Membership.find_by(user_uuid: @user_uuid, group_uuid: params[:group_uuid])
          err("L'utente è gia all'interno del gruppo", code: :email)
          break
        end
      end

      to_initialize_events do
        unless @user_uuid
          @user_uuid = SecureRandom.uuid

          # creo il nuovo utente
          event_user = MatildaCore::Users::InviteEvent.new(
            user_uuid: @user_uuid,
            name: params[:name],
            surname: params[:surname],
            email: params[:email],
            log_who: params[:log_who],
            _with_notification_invite: params[:_with_notification_invite]
          )
          internal_error && break unless event_user.saved?

          # memorizzo l'indirizzo email del nuovo utente
          event_email = MatildaCore::Users::CreateEmailEvent.new(
            user_uuid: @user_uuid,
            email: params[:email],
            primary: true,
            log_who: params[:log_who]
          )
          internal_error && break unless event_email.saved?
        end

        # invito l'utente al gruppo
        event_membership = MatildaCore::Memberships::CreateEvent.new(
          user_uuid: @user_uuid,
          group_uuid: params[:group_uuid],
          log_who: params[:log_who]
        )
        internal_error && break unless event_membership.saved?

        if MatildaCore.config.authentication_invitation_default_group_permissions&.length&.positive?
          event_permissions = MatildaCore::Memberships::EditPermissionsEvent.new(
            user_uuid: @user_uuid,
            group_uuid: params[:group_uuid],
            permissions: MatildaCore.config.authentication_invitation_default_group_permissions,
            log_who: params[:log_who]
          )
          internal_error && break unless event_permissions.saved?
        end
      end

    end

  end

end
