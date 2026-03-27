<template>
  <div class="skill" :class="{ open, compact }">
    <button class="skill-header" @click="toggle">
      <span class="skill-name">{{ model.title }}</span>
      <div class="skill-header-right">
        <span class="skill-count">{{ model.keys.length }}</span>
        <span class="chevron" :class="{ open }">›</span>
      </div>
    </button>
    <Transition name="expand">
      <ul v-if="open" class="skill-keys">
        <li v-for="k in model.keys" :key="k" v-html="k"></li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SkillModel from "@/model/SkillModel";

defineProps<{ model: SkillModel; compact?: boolean }>();

const open = ref(false);

function toggle() {
  open.value = !open.value;
}
</script>

<style scoped>
.skill {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.skill.open {
  border-color: rgba(88, 166, 255, 0.4);
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.875rem 1.125rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 0.75rem;
  transition: background 0.15s ease;
}

.compact .skill-header {
  padding: 0.7rem 0.9rem;
}

.skill-header:hover {
  background: var(--bg-elevated);
}

.skill-name {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  transition: color 0.15s ease;
}

.compact .skill-name {
  font-size: 0.82rem;
}

.open .skill-name {
  color: var(--accent);
}

.skill-header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.skill-count {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-muted);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.1rem 0.45rem;
  line-height: 1.4;
}

.open .skill-count {
  background: rgba(88, 166, 255, 0.1);
  border-color: rgba(88, 166, 255, 0.25);
  color: var(--accent);
}

.chevron {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1;
  display: inline-block;
  transition:
    transform 0.2s ease,
    color 0.15s ease;
  transform: rotate(0deg);
}

.chevron.open {
  transform: rotate(90deg);
  color: var(--accent);
}

/* Keys list */
.skill-keys {
  list-style: none;
  padding: 0 1.125rem 0.875rem 1.125rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  border-top: 1px solid var(--border);
}

.compact .skill-keys {
  padding: 0 0.9rem 0.7rem 0.9rem;
}

.skill-keys li {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.55;
  padding: 0.2rem 0;
  padding-left: 0.875rem;
  position: relative;
}

.compact .skill-keys li {
  font-size: 0.78rem;
}

.skill-keys li::before {
  content: "›";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 0.85rem;
}

.skill-keys li :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: rgba(88, 166, 255, 0.3);
  text-underline-offset: 2px;
}

.skill-keys li :deep(a):hover {
  color: var(--accent-hover);
  text-decoration-color: var(--accent-hover);
}

/* Accordion transition */
.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.25s ease,
    opacity 0.2s ease;
  overflow: hidden;
  max-height: 1200px;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
