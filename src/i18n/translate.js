import * as translations from './translations';

export default function translate(lang, text) {
  let result = translations[lang] && (text in translations[lang])
    ? translations[lang][text]
    : text;
  return result;
}
