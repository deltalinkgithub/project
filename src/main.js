import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import "@/assets/css/main/icomoon/style.css"
import {Tag,Cart} from '@/components/main';

Vue.config.productionTip = false
Vue.component('jin-tag', Tag);
Vue.component('jin-cart', Cart);

new Vue({
  router,
  render: h => h(App),
  components:{
    'jin-tag':Tag,
    'jin-cart':Cart
  }
}).$mount('#app')
