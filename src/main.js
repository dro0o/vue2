import Vue from "vue"
import VueResource from "vue-resource"
import App from "./App.vue"

Vue.use(VueResource)

// no $ when accessing global from main.js
Vue.http.options.root = "https://vuejs-http-e994d.firebaseio.com/data.json"

new Vue({
  el: "#app",
  render: (h) => h(App),
})
