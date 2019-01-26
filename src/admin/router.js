import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import store from './store'

Vue.use(VueRouter);

import skills from "./components/skills.vue";
import works from "./components/works.vue";
import login from "./components/login.vue";

const routes = [
  {
    path: "/login",
    component: login,
    meta: {
      public: true
    }
  },
  {
    path: "/",
    component: skills
  },
  {
    path: "/works",
    component: works
  }
];

const router = new VueRouter({ routes });
const guard = axios.create({
  baseURL: "http://localhost:3000"
});

router.beforeEach((to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserAuthorized = store.state.user.isAuth;

  if (isPublicRoute === false && isUserAuthorized === false) {
    guard
      .get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => {
        next();
      })
      .catch(error => {
        router.replace('/login')
        localStorage.removeItem("token");
      });
  } else {
    next();
  }
});

export default router;
