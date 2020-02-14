# frozen_string_literal: true

module MatildaCore

  # Config.
  class Config

    # GLOBAL

    # Imposta il titolo generico del prodotto.
    attr_accessor :global_title

    # Imposta il logo generico del prodotto (url assoluto o path relativa).
    attr_accessor :global_logo

    # Imposta il formato utilizzato per la visualizzazione delle date.
    attr_accessor :global_date_format

    # Imposta la versione dell'applicativo.
    attr_accessor :global_version

    # MAILER

    # Imposta l'indirizzo del mittente delle emal inviate dal sistema.
    # E' possibile impostare anche un valore con il formato: "Name <name@email.com>"
    attr_accessor :mailer_from_address

    # AUTHENTICATION

    # Imposta la possibilita' di registrarsi autonomamente alla piattaforma.
    attr_accessor :authentication_permit_signup

    # Imposta un gruppo di default a cui assegnare l'utente dopo il signup.
    attr_accessor :authentication_signup_default_group_uuid

    # Imposta i permessi di default per gli utenti che si iscrivono.
    attr_accessor :authentication_signup_default_group_permissions

    # Imposta i permessi di default per gli utenti che vengono invitati.
    attr_accessor :authentication_invitation_default_group_permissions

    # Imposta la logica da utilizzare per la selezione del gruppo dopo l'autenticazione.
    # Possibili valori: nil, :first, :last
    attr_accessor :authentication_login_group_selection

    # GRUPPI

    # Specifica una path alternativa da utilizzare come root del gruppo selezionato.
    attr_accessor :groups_root_path

    # Specifica se permettere agli utenti di creare nuovi gruppi o meno.
    attr_accessor :groups_permit_creation_to_users

    # Specifica il numero massimo di gruppi ai quali l'utente puo' appartenere.
    # Se il limite e' impostato a 1 allora la sezione di selezione gruppo viene nascosta.
    attr_accessor :groups_max_number_per_user

    # SIDEBAR

    # Contiene la lista di voci della sidebar.
    attr_accessor :sidebar_items

    # MEMBERSHIPS

    # Specifica la lista di permessi utilizzabili dall'applicazione.
    attr_accessor :memberships_permissions

    def initialize
      set_default_options
    end

    def set_default_options
      @global_title = 'Matilda'
      @global_logo = nil
      @global_date_format = '%d-%m-%Y'
      @global_version = MatildaCore::VERSION
      @mailer_from_address = 'Matilda <matilda@1d3o.it>'
      @authentication_permit_signup = true
      @authentication_signup_default_group_uuid = nil
      @authentication_signup_default_group_permissions = []
      @authentication_invitation_default_group_permissions = []
      @groups_root_path = nil
      @groups_permit_creation_to_users = true
      @groups_max_number_per_user = nil

      # voci editabili tramite funzioni
      @sidebar_items = []
      @memberships_permissions = []
    end

    # Permette di aggiungere una nuova voce di menu alla sidebar.
    def add_sidebar_item(name, label: '', url: '', icon: '', permission: nil, index: 0)
      names = @sidebar_items.map { |i| i[:name] }
      throw 'Name already used' if names.include?(name)

      @sidebar_items.push(
        name: name,
        label: label,
        url: url,
        icon: icon,
        permission: permission,
        index: index
      )
      @sidebar_items = @sidebar_items.sort_by { |hsh| hsh[:index] }
    end

    # Permette di rimuovere una voce di menu dalla sidebar.
    def remove_sidebar_item(name)
      names = @sidebar_items.map { |i| i[:name] }
      throw 'Name not used' unless names.include?(name)

      @sidebar_items = @sidebar_items.reject { |si| si[:name] == name }
    end

    # Permette di aggiungere un nuovo possibile livello di permesso alla applicazione.
    def add_memberships_permission(name, label: '', group: 'Default', index: 0)
      names = @memberships_permissions.map { |i| i[:name] }
      throw 'Name already used' if names.include?(name)

      @memberships_permissions.push(
        name: name,
        label: label,
        group: group,
        index: index
      )
    end

  end

end
