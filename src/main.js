import Vue from "vue";
import App from "./App.vue";
import Home from "./Components/Home.vue";

// Global component introduction to highest root element
Vue.component("app-server", Home);

new Vue({
  el: "#app",
  render: h => h(App)
});
