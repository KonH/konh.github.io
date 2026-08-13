<template>
  <router-link
    class="tag-badge"
    :class="{ active }"
    :to="{ path: '/blog', query: active ? {} : { tag } }"
  >
    #{{ tag }}
  </router-link>
</template>

<script setup lang="ts">
defineProps<{ tag: string; active?: boolean }>();
</script>

<style scoped>
.tag-badge {
  display: inline-flex;
  align-items: center;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  background: rgba(88, 166, 255, 0.08);
  color: var(--accent);
  border: 1px solid rgba(88, 166, 255, 0.25);
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
  white-space: nowrap;
}

.tag-badge:hover {
  background: rgba(88, 166, 255, 0.16);
  border-color: var(--accent);
  color: var(--accent-hover);
}

.tag-badge.active {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
}
</style>
