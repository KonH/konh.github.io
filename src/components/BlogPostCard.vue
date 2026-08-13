<template>
  <router-link class="card" :to="`/blog/${model.slug}`">
    <div class="card-top">
      <span class="date">{{ formatDate(model.date) }}</span>
      <div v-if="model.tags.length" class="tags" @click.stop>
        <TagBadge v-for="t in model.tags" :key="t" :tag="t" />
      </div>
    </div>
    <div class="card-bottom">
      <div class="text">
        <h2 class="title">{{ model.title }}</h2>
        <p class="excerpt">{{ model.excerpt }}</p>
      </div>
      <span class="arrow">↗</span>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import BlogPostModel from "@/model/BlogPostModel";
import TagBadge from "@/components/TagBadge.vue";

defineProps<{ model: BlogPostModel }>();

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
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

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.date {
  font-size: 0.75rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.tags {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.card-bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
}

.text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.01em;
}

.card:hover .title {
  color: var(--accent-hover);
}

.excerpt {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.5;
}

.arrow {
  font-size: 0.85rem;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-top: 3px;
  transition:
    color 0.15s ease,
    transform 0.15s ease;
}

.card:hover .arrow {
  color: var(--accent);
  transform: translate(2px, -2px);
}
</style>
