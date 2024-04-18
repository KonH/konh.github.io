import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PersonalInfo from "@/components/PersonalInfo.vue";
import SkillList from "@/components/SkillList.vue";
import ProjectList from "@/components/ProjectList.vue";
import PullRequestList from "@/components/PullRequestList.vue";
import ContactList from "@/components/ContactList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: PersonalInfo,
  },
  {
    path: "/skills",
    name: "Skills",
    component: SkillList,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectList,
  },
  {
    path: "/pull_requests",
    name: "PullRequests",
    component: PullRequestList,
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: ContactList,
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
