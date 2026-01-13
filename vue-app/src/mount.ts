import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import VueApp from "./VueApp.vue";
import Home from "./Home.vue";
import Details from "./Details.vue";

export function mount(el: HTMLElement, data?: { user: { name: string; role: string } }) {
  const router = createRouter({
    history: createWebHistory("/vue"),
    routes: [
      { path: "/", component: Home },
      { path: "/details", component: Details },
    ],
  });

  const app = createApp(VueApp, {
    user: data?.user
  });
  
  app.use(router);
  app.mount(el);

  return () => app.unmount();
}
