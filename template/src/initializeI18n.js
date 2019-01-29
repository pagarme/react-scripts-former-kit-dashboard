import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    debug: true,

    defaultNS: 'translations',

    fallbackLng: 'en-US',

    interpolation: {
      escapeValue: false,
    },

    ns: ['translations'],

    react: {
      wait: true,
    },
  })

export default i18n
