import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "@/assets/css/main/icomoon/style.css"
import {Tag,Cart,MainPage,Menu} from './components/main';

Vue.config.productionTip = false
Vue.component('jin-tag', Tag);
Vue.component('jin-cart', Cart);
Vue.component('jin-page', MainPage);
Vue.component('jin-menu', Menu);

new Vue({
  router,
  render: h => h(App),
  components:{}
}).$mount('#app')
