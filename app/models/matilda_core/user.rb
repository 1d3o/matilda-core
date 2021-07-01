# frozen_string_literal: true

module MatildaCore

  # User.
  class User < ApplicationRecord

    USERNAME_REGEX = /\A[a-zA-Z0-9]+\z/
    EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

    has_many :user_emails, foreign_key: :user_uuid, dependent: :destroy
    has_many :user_sessions, foreign_key: :user_uuid, dependent: :destroy
    has_many :memberships, foreign_key: :user_uuid, dependent: :destroy
    has_many :groups, through: :memberships

    # Ritorna il nome completo dell'utente.
    def complete_name
      @complete_name ||= "#{surname} #{name}"
    end

    # Ritorna l'indirizzo email principale dell'utente.
    def email
      @email ||= user_emails.find_by(primary: true)&.email || user_emails.first&.email
    end

    # Ritorna un hash con i dati dell'utente serializzati per l'autenticazione.
    def serialize_authentication
      data = as_json
      data[:password] = 'FILTERED'
      data[:email] = email
      data
    end

  end

end
