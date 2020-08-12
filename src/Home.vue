<template>
  <div>
    <!-- <app-server-status v-for="server in 5" :key="server in 5"></app-server-status> -->
    <app-server-header />
    <hr />
    <app-server-status />
    <hr />
    <app-server-footer />
  </div>
</template>
<script>
// Local component import where needed
import ServerHeader from "./Header";
import ServerStatus from "./ServerStatus";
import ServerFooter from "./Footer";

export default {
  components: {
    "app-server-header": ServerHeader,
    "app-server-status": ServerStatus,
    "app-server-footer": ServerFooter
  }
};
</script>
