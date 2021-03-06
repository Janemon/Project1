// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueLazyload, {
  loading: "./static/loading-svg/loading-bars.svg"
})  // 使用图片懒加载，'v-lazy'
Vue.use(infiniteScroll)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
