import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueFinalModal from 'vue-final-modal';
import { createI18n } from 'vue-i18n';
import 'vue-i18n';
import eng from './locales/en.json'
import rus from './locales/ru.json'
import jpn from './locales/ja.json'
import deu from './locales/de.json'
import fra from './locales/fr.json'
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import VueMarkdownIt from 'vue3-markdown-it';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faCoffee, faGlobeAmericas  } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome, faJs, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFontAwesome, faPhone, faCoffee, faGlobeAmericas, faJs, faVuejs)

const i18n = createI18n({
  messages: {
    en: eng,
    ru: rus,
    jp: jpn,
    de: deu,
    fr: fra
},
    locale: window.localStorage.Language || window.localStorage.sessionStorage || window.navigator.language, 
    fallbackLocale: 'en'
})
    
createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueMarkdownIt)
  .use(VueFinalModal())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");