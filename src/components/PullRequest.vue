<template>
  <a
    class="card"
    :href="model.htmlUrl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="card-top">
      <span class="repo">
        <span class="owner">{{ model.ownerName() }}</span
        ><span class="slash">/</span
        ><span class="repo-name">{{ model.repositoryName() }}</span>
      </span>
      <div class="meta">
        <span class="badge" :class="model.merged ? 'merged' : 'open'">
          {{ model.merged ? "merged" : "open" }}
        </span>
        <span class="date">{{ formatDate(model.createdAt) }}</span>
      </div>
    </div>
    <div class="card-bottom">
      <p class="title">{{ model.title }}</p>
      <span class="arrow">↗</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import PullRequestModel from "@/model/PullRequestModel";

defineProps<{ model: PullRequestModel }>();

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

.repo {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.owner {
  color: var(--text-muted);
}

.slash {
  color: var(--border);
  margin: 0 1px;
}

.repo-name {
  color: var(--accent);
  font-weight: 500;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  flex-shrink: 0;
}

.badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  text-transform: lowercase;
}

.badge.merged {
  background: rgba(63, 185, 80, 0.12);
  color: var(--accent-green);
  border: 1px solid rgba(63, 185, 80, 0.3);
}

.badge.open {
  background: rgba(88, 166, 255, 0.1);
  color: var(--accent);
  border: 1px solid rgba(88, 166, 255, 0.25);
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

.title {
  font-size: 0.9rem;
  color: var(--text);
  line-height: 1.5;
  flex: 1;
}

.card:hover .title {
  color: var(--accent-hover);
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
