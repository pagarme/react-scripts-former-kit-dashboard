import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

import translations from './locales/pt/translations.json'

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    defaultNS: 'translations',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
    lng: 'pt',
    ns: ['translations'],
    react: {
      wait: true,
    },
    resources: {
      pt: {
        translations,
      },
    },
    whitelist: ['pt'],
  })

export default i18n
