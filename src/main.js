import Vue from "vue"
import App from "./App.vue"

Vue.filter("to-lowercase", (value) => {
  return value.toLowerCase()
})
Vue.filter("countChars", (value) => {
  var charLen = value.split("").length
  return value + " (" + charLen + ")"
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
