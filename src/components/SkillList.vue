<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">Skills</h1>
      <p class="page-subtitle">
        Technologies and tools I've built things with — core expertise and
        beyond.
      </p>
    </header>

    <div class="categories">
      <section v-for="[cat, skills] in coreSkills" :key="cat" class="category">
        <h2 class="category-title">
          <span class="category-line"></span>
          {{ cat }}
          <span class="category-line"></span>
        </h2>
        <div class="skill-list">
          <Skill v-for="s in skills" :key="s.title" :model="s" />
        </div>
      </section>
    </div>

    <section class="category">
      <h2 class="category-title">
        <span class="category-line"></span>
        Other
        <span class="category-line"></span>
      </h2>
      <div class="other-grid">
        <Skill v-for="s in otherSkills" :key="s.title" :model="s" compact />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SkillModel from "@/model/SkillModel";
import Skill from "@/components/Skill.vue";

const coreSkills = computed(() => SkillModel.loadCoreSkills());
const otherSkills = computed(() => SkillModel.loadOtherSkills());
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 2.5rem;
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

.categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
}

.category {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.category-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.other-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}

@media (max-width: 520px) {
  .other-grid {
    grid-template-columns: 1fr;
  }
}
</style>
