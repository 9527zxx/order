import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs } from 'vant';
import { Popup } from 'vant';
import { ImagePreview } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Sku } from 'vant';
import { NavBar } from 'vant';

Vue.use(NavBar);
Vue.use(Sku);
Vue.use(Swipe);
Vue.use(SwipeItem);

// 全局注册
Vue.use(ImagePreview);
Vue.use(Popup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
