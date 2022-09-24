import Cookies from 'js-cookie';

import LANG_EN from '@/i18n/en.json';
import LANG_RO from '@/i18n/ro.json';

const messages = {
  ro: LANG_RO,
  en: LANG_EN,
};

// eslint-disable-next-line import/no-mutable-exports
let lang = Cookies.get('lang');

if (!lang) {
  lang = 'en'; // default language
  // lang = navigator.language.slice(0, 2);
  Cookies.set('lang', lang, { expires: 2 });
}

lang = 'ro'; // language override until english integration

export { lang, messages };
