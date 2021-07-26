import { createRouter, createWebHistory } from "vue-router";
import index from "@/page/index.vue";
import contact from "@/page/contact.vue";

const routes = [
  { path: "/", name: "index", component: index },
  { path: "/contact", name: "contact", component: contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
