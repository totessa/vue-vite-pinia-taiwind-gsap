import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
  const url = new URL(window.location.href)
  url.hostname = url.hostname.replace(/^www\./, '')
  window.location.replace(url.toString())
} else {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}
