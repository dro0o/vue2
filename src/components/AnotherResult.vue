<template>
  <div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  // can use object to rename mapGetters assignement to local var
  // computed: mapGetters({counter: 'doubleCounter'})
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
  }, // use spread to make local computed properties
}
</script>
