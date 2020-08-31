import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import App from "@/App";
import AuthHandler from "@/components/AuthHandler";
import Gallery from "@/components/Gallery";
import UploadForm from "@/components/UploadForm";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: null },
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/gallery", component: Gallery },
    { path: "/upload", component: UploadForm },
  ],
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
