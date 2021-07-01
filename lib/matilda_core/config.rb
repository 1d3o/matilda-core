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

    # TEMPLATE

    # Sovrascrive il contenuto del head.
    attr_accessor :template_head

    # Sovrascrive il contenuto del footer.
    attr_accessor :template_footer

    # MAILER

    # Imposta l'indirizzo del mittente delle emal inviate dal sistema.
    # E' possibile impostare anche un valore con il formato: "Name <name@email.com>"
    attr_accessor :mailer_from_address

    # AUTHENTICATION

    # Imposta la durata di vita della sessione.
    attr_accessor :authentication_session_lifetime

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

    # Imposta un redirect ad hoc dove rimandare gli utenti in caso di sessione valida.
    attr_accessor :authentication_session_valid_custom_redirect

    # Imposta un redirect ad hoc dove rimandare gli utenti in caso di sessione non valida.
    attr_accessor :authentication_session_invalid_custom_redirect

    # GRUPPI

    # Specifica una path alternativa da utilizzare come root del gruppo selezionato.
    attr_accessor :groups_root_path

    # Specifica se permettere agli utenti di creare nuovi gruppi o meno.
    attr_accessor :groups_permit_creation_to_users

    # Specifica il numero massimo di gruppi ai quali l'utente puo' appartenere.
    # Se il limite e' impostato a 1 allora la sezione di selezione gruppo viene nascosta.
    attr_accessor :groups_max_number_per_user

    # Specifica se mostrare o meno il nome del gruppo nell'header quando questo e' selezionato.
    attr_accessor :groups_show_name_on_header

    # SIDEBAR

    # Contiene la lista di voci della sidebar.
    attr_accessor :sidebar_items

    # MEMBERSHIPS

    # Specifica se nascondere nella vista utente la visualizzazione e modifica dei
    # singoli permessi utente.
    attr_accessor :memberships_show_permissions_editor

    # Specifica la lista di permessi utilizzabili dall'applicazione.
    attr_accessor :memberships_permissions

    # Specifica la lista di ruoli di permessi utilizzabili dall'applicazione.
    # Un ruolo di permessi è un raggruppamento di singoli permessi che semplifica
    # la suddivisione delle utenze in ruoli.
    # In generale, utilizzare :memberships_permissions per identificare singole azioni
    # e :memberships_permissions_roles per identificare livelli gerarchici.
    attr_accessor :memberships_permissions_roles

    # LOCALES

    # Specifica la sorgente utilizzata per il caricamento delle traduzioni tramite i task
    # di installazione.
    # I valori possibili sono: :gdrive_spreadsheet_key, :csv_file
    attr_accessor :locales_source_type

    # Specifica il valore della sorgente delle traduzioni caricate tramite task.
    # Inserire la chiave di un file spreadsheet nel caso di :gdrive_spreadsheet_key o la path del
    # file CSV nel caso di :csv_file_path.
    attr_accessor :locales_source_value

    def initialize
      set_default_options
    end

    def set_default_options
      @global_title = 'Matilda'
      @global_logo = nil
      @global_date_format = '%d-%m-%Y'
      @global_version = MatildaCore::VERSION
      @template_footer = nil
      @template_head = nil
      @mailer_from_address = 'Matilda <matilda@1d3o.it>'
      @authentication_session_lifetime = false
      @authentication_permit_signup = true
      @authentication_signup_default_group_uuid = nil
      @authentication_signup_default_group_permissions = []
      @authentication_invitation_default_group_permissions = []
      @authentication_session_valid_custom_redirect = nil
      @authentication_session_invalid_custom_redirect = nil
      @groups_root_path = nil
      @groups_permit_creation_to_users = true
      @groups_max_number_per_user = nil
      @groups_show_name_on_header = false
      @memberships_show_permissions_editor = true
      @locales_source_type = nil
      @locales_source_value = nil

      # voci editabili tramite funzioni
      @sidebar_items = []
      @memberships_permissions = []
      @memberships_permissions_roles = []
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

    # Permette di aggiungere un nuovo possibile gruppo di permessi alla applicazione.
    def add_memberships_permissions_role(name, label: '', permissions: [], index: 0)
      names = @memberships_permissions_roles.map { |i| i[:name] }
      throw 'Name already used' if names.include?(name)

      @memberships_permissions_roles.push(
        name: name,
        label: label,
        permissions: permissions,
        index: index
      )
    end


  end

end
