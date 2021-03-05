import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueFinalModal from 'vue-final-modal';
import { createI18n } from 'vue-i18n';
import eng from './locales/en.json'
import rus from './locales/ru.json'
import jpn from './locales/ja.json'
import deu from './locales/de.json'
import fra from './locales/fr.json'
import './assets/scrollreveal.min.js'

const i18n = createI18n({
  messages: {
    en: eng,
    ru: rus,
    jp: jpn,
    de: deu,
    fr: fra
},
    locale: window.localStorage.Language || 'en',
    fallbackLocale: 'ru'
})

createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueFinalModal())
  .mount("#app");