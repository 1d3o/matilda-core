# frozen_string_literal: true

module MatildaCore

  # DocumentationController.
  class DocumentationController < MatildaCore::ApplicationController

    before_action do
      session_present_check(:group_uuid)
    end

    def index_view
      sidebar_set('matilda_core.documentation')
      section_head_set('Documentazione', [{ label: 'Documentazione' }])
    end

  end

end
