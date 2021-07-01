# frozen_string_literal: true

module MatildaCore

  # Engine.
  class Engine < ::Rails::Engine

    isolate_namespace MatildaCore

    # Imposto le voci della sidebar utilizzando la configurazione dell'engine.
    initializer 'matilda_core.add_sidebar_items', after: :add_routing_paths do |_app|
      Rails.application.reload_routes!

      MatildaCore.config.add_sidebar_item(
        'matilda_core.groups',
        label: 'locale.matilda_core.titles.dashboard',
        url: MatildaCore::Engine.routes.url_helpers.groups_index_view_path,
        icon: 'fas fa-tachometer-alt',
        index: 1000
      )
      MatildaCore.config.add_sidebar_item(
        'matilda_core.memberships',
        label: 'locale.matilda_core.titles.users',
        url: MatildaCore::Engine.routes.url_helpers.memberships_index_view_path,
        icon: 'fas fa-users',
        permission: 'matilda_core.memberships',
        index: 1100
      )
      if Rails.env.development?
        MatildaCore.config.add_sidebar_item(
          'matilda_core.documentation',
          label: 'locale.matilda_core.titles.documentation',
          url: MatildaCore::Engine.routes.url_helpers.documentation_index_view_path,
          icon: 'fas fa-code',
          index: 999999
        )
      end
    end

    # Imposto i permessi degli utenti.
    initializer 'matilda_core.add_memberships_permissions' do |_app|
      MatildaCore.config.add_memberships_permission(
        'matilda_core.memberships',
        label: 'locale.matilda_core.strings.manage_users_permission',
        index: 0,
        group: 'locale.matilda_core.titles.administration'
      )
    end

    # Imposto i ruoli degli utenti.
    initializer 'matilda_core.add_memberships_permissions_roles' do |_app|
      MatildaCore.config.add_memberships_permissions_role(
        'matilda_core.administrator',
        label: 'locale.matilda_core.strings.administrator',
        index: 0,
        permissions: ['matilda_core.memberships']
      )
    end

  end

end
