<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">Projects</h1>
      <p class="page-subtitle">
        Personal and team pet projects — experiments, game jams, and tools.
      </p>
    </header>

    <div class="pr-grid">
      <Project v-for="p in projects" :key="p.name" :model="p" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ProjectModel from "@/model/ProjectModel";
import Project from "@/components/Project.vue";
import userData from "@/assets/repositories_user.json";
import gjdtData from "@/assets/repositories_gjdt.json";
import tucData from "@/assets/repositories_tuc.json";

const cSharpProjects = [
  "https://github.com/KonH/TetrisGame",
  "https://github.com/KonH/LD44Project",
];

function tryFix(m: ProjectModel): ProjectModel {
  if (cSharpProjects.includes(m.htmlUrl)) {
    m.language = "C#";
  }
  return m;
}

const projects = computed(() =>
  (userData as unknown[])
    .concat(gjdtData as unknown[])
    .concat(tucData as unknown[])
    .map(ProjectModel.fromJson)
    .filter((p: ProjectModel) => !p.archived && !p.fork)
    .map(tryFix)
    .sort(
      (a: ProjectModel, b: ProjectModel) =>
        b.updatedAt.getTime() - a.updatedAt.getTime(),
    ),
);
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.pr-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
