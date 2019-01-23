<template lang="pug"> 
.form 
  input(type="text" placeholder="login" v-model="user.name") 
  input(type="password" placeholder="password" v-model="user.password")
  button(type="button" @click="login") Отправить
</template>
<script>
import axios from "axios";
import appRequests from "../requests.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapMutations({
      authorize: "user/authorize"
    }),
    login() {
      axios.post("http://localhost:8000/login", this.user).then(
        response => {
          if (response.status === 200) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            appRequests.defaults.headers["Authorization"] = `Bearer ${token}`;
            this.authorize();
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
</script>

