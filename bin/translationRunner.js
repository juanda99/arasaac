// translationRunner.js
import manageTranslations from 'react-intl-translations-manager'

manageTranslations({
  messagesDirectory: '../src/_translations/src',
  translationsDirectory: '../src/_translations/locales/',
  languages: ['en', 'es', 'fr'] // any language you need
})
