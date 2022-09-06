
import translationEN from '../public/locales/en/translation.json';
import translationFR from '../public/locales/fr/translation.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'fr',
  resources: {
    en: {
      translation: translationEN
    },
    fr:{  translation:translationFR
    },
  }
});
export default i18n;