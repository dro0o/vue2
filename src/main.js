import Vue from "vue"
import App from "./App.vue"

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age)
    },
    changeDetails(server) {
      this.$emit("serverDetailChange", server)
    },
    changeStatus(id) {
      this.$emit("serverStatusChange", id)
    },
  },
})

new Vue({
  el: "#app",
  render: (h) => h(App),
})
