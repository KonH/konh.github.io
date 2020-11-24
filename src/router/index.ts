import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Works from "@/views/Works.vue";
import Projects from "@/views/Projects.vue";
import PullRequests from "@/views/PullRequests.vue";
import Contacts from "@/views/Contacts.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/work",
    name: "Work",
    component: Works,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/pull_requests",
    name: "PullRequests",
    component: PullRequests,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
