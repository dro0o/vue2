export const countCharsMixin = {
  data() {
    return {
      text: "Hello there!",
    }
  },
  computed: {
    countCharsComputedMixin() {
      var charLen = this.text.split("").length
      return this.text + " (" + charLen + ")"
    },
  },
}
