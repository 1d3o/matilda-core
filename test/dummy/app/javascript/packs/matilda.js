import '../../../../../front/loader'

// Add support to react-rails
const componentRequireContextApp = require.context('react', true)
const componentRequireContexEngine = require.context('../../../../../front/react', true)
const ReactRailsUJS = require('react_ujs')
ReactRailsUJS.useContext(componentRequireContextApp)
ReactRailsUJS.useContext(componentRequireContexEngine)
