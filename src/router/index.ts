import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/components/PersonalInfo.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("@/components/SkillList.vue"),
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("@/components/WorkHistory.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/components/ProjectList.vue"),
  },
  {
    path: "/pull_requests",
    name: "PullRequests",
    component: () => import("@/components/PullRequestList.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("@/components/ContactList.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.isReady().then(() => {
  if (sessionStorage.redirect) {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    router.push(redirect);
  }
});

export default router;
