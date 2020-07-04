import Vue from 'vue'
import './registerServiceWorker'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ScrollAnimation from './directives/scrollanimation'
import CKEditor from '@ckeditor/ckeditor5-vue';

Vue.use( CKEditor );

Vue.directive('scrollanimation', ScrollAnimation);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
