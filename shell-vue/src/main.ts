import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import RemoteSlot from "./RemoteSlot.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: "/vue/:path*", 
      component: RemoteSlot,
      props: { remote: "vue" }
    },
    { 
      path: "/react/:path*", 
      component: RemoteSlot,
      props: { remote: "react" }
    },
    {
      path: "/",
      redirect: "/vue"
    }
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
