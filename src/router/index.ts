import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Projects from "@/views/Projects.vue";
import PullRequests from "@/views/PullRequests.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
