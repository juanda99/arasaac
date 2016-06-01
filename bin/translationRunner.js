// translationRunner.js
import manageTranslations from 'react-intl-translations-manager'

manageTranslations({
  messagesDirectory: '_translations/src',
  translationsDirectory: '_translations/locales',
  languages: ['en', 'es', 'fr'] // any language you need
})
