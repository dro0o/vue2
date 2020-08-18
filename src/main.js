import Vue from "vue"
import App from "./App.vue"

Vue.filter("to-lowercase", (value) => {
  return value.toLowerCase()
})
Vue.filter("countChars", (value) => {
  return value + " (" + value.length + ")"
})

Vue.mixin({
  created() {
    console.log("global mixin created, created hook")
  },
})

new Vue({
  el: "#app",
  render: (h) => h(App),
})
