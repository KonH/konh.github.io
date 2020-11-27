import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PersonalInfo from "@/components/PersonalInfo.vue";
import WorkList from "@/components/WorkList.vue";
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
    path: "/work",
    name: "Work",
    component: WorkList,
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

export default router;
