<template>
  <a class="card" :href="model.url" target="_blank" rel="noopener noreferrer">
    <div class="icon-wrap">
      <img :src="getIcon(model.icon)" :alt="model.title" class="icon" />
    </div>
    <div class="info">
      <span class="platform">{{ model.title }}</span>
      <span class="handle">{{ handle }}</span>
    </div>
    <span class="arrow">↗</span>
  </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ContactModel from "@/model/ContactModel";

const props = defineProps<{ model: ContactModel }>();

function getIcon(icon: string): string {
  return require(`@/assets/contacts/${icon}`);
}

const handle = computed(() => {
  try {
    const url = new URL(props.model.url);
    return url.hostname.replace("www.", "") + url.pathname;
  } catch {
    return props.model.url;
  }
});
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--text);
  transition:
    border-color 0.15s ease,
    background 0.15s ease,
    transform 0.15s ease,
    box-shadow 0.15s ease;
  flex: 1;
  min-width: 220px;
}

.card:hover {
  border-color: var(--accent);
  background: var(--bg-elevated);
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(88, 166, 255, 0.12);
  color: var(--text);
}

.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--bg-elevated);
  border-radius: var(--radius);
  flex-shrink: 0;
}

.icon {
  width: 1.4rem;
  height: 1.4rem;
  object-fit: contain;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
  min-width: 0;
}

.platform {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text);
}

.handle {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.arrow {
  font-size: 0.9rem;
  color: var(--text-muted);
  flex-shrink: 0;
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.card:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
</style>
