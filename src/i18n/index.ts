import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhCN from './locales/zh-CN.json';
import zhTW from './locales/zh-TW.json';
import en from './locales/en.json';

const nsList = ['common', 'nav', 'footer', 'home', 'products', 'solutions', 'about', 'contact', 'seo', 'lang'];

function buildResources(data: any): Record<string, any> {
  const result: Record<string, any> = {};
  nsList.forEach(ns => {
    if (data[ns]) {
      result[ns] = data[ns];
    }
  });
  return result;
}

const resources: Record<string, Record<string, any>> = {
  'zh-CN': buildResources(zhCN),
  'zh-TW': buildResources(zhTW),
  'en': buildResources(en),
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('i18nextLng') || 'zh-CN',
    fallbackLng: 'zh-CN',
    supportedLngs: ['zh-CN', 'zh-TW', 'en'],
    defaultNS: 'common',
    ns: nsList,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
    },
  });

export default i18n;
