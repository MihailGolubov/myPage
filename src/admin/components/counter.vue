<template lang="pug">
  .counter
    span {{timeInMs}}
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("counter", {
      timeInMs: state => state.timeInMs,
      interval: state => state.interval
    })
  },
  watch: {
    timeInMs(value) {
      if (value <= 0) {
        clearInterval(this.interval);
      }
    }
  },
  methods: {
    ...mapActions({
      countDown: "counter/countDown"
    })
  }
};
</script>

