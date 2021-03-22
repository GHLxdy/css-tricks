import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from "vue-highlightjs";
Vue.config.productionTip = false
Vue.use(VueHighlightJS);
import "highlight.js/styles/tomorrow-night-eighties.css";
new Vue({
  render: h => h(App),
}).$mount('#app')
