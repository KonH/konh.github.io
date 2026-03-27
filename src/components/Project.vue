<template>
  <a
    class="card"
    :href="model.htmlUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="card-top">
      <span class="name">{{ model.name }}</span>
      <div class="meta">
        <span v-if="model.language" class="lang">{{ model.language }}</span>
        <span v-if="model.stargazersCount > 0" class="stars">
          ★ {{ model.stargazersCount }}
        </span>
        <span class="date">{{ formatDate(model.updatedAt) }}</span>
      </div>
    </div>
    <div class="card-bottom">
      <p class="description">{{ model.description || "No description" }}</p>
      <span class="arrow">↗</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import ProjectModel from "@/model/ProjectModel";

defineProps<{ model: ProjectModel }>();

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
}

.card:hover {
  border-color: var(--accent);
  background: var(--bg-elevated);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(88, 166, 255, 0.1);
  color: var(--text);
}

/* Top row */
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.name {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--accent);
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
}

.lang {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: rgba(63, 185, 80, 0.1);
  color: var(--accent-green);
  border: 1px solid rgba(63, 185, 80, 0.25);
}

.stars {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.date {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

/* Bottom row */
.card-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.description {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
  flex: 1;
}

.card:hover .description {
  color: var(--text);
}

.arrow {
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-top: 1px;
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.card:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
</style>
