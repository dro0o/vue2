import Vue from "vue"
import VueResource from "vue-resource"
import App from "./App.vue"

Vue.use(VueResource)

// no $ when accessing global from main.js
// PUT replaces data, POST appends data in FB
Vue.http.options.root = "https://vuejs-http-e994d.firebaseio.com/data.json"
Vue.http.interceptors.push((request, next) => {
  console.log(request)
  if (request.method == "POST") {
    request.method = "PUT"
  }
  next((response) => {
    response.json = () => {
      return { messages: response.body }
    }
  })
})

new Vue({
  el: "#app",
  render: (h) => h(App),
})
