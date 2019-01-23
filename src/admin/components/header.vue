<template lang="pug">
  #header
    .title Панель администрирования
    a.exit(@click="logout") Вернуться на сайт

</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      logout: "user/logout"
    })
  }
};
</script>


<style lang="scss" scoped>
#header {
  background: $green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  height: 100%;
}

.exit {
  color: inherit;
  cursor: pointer;
}
</style>
