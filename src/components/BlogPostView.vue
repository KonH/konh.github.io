<template>
  <div v-if="post" class="page">
    <router-link to="/blog" class="back-link">← Back to blog</router-link>

    <header class="post-header">
      <h1 class="title">{{ post.title }}</h1>
      <div class="meta">
        <span class="date">{{ formatDate(post.date) }}</span>
        <div v-if="post.tags.length" class="tags">
          <TagBadge v-for="t in post.tags" :key="t" :tag="t" />
        </div>
      </div>
    </header>

    <div class="post-content" v-html="post.contentHtml"></div>
  </div>
  <div v-else class="page">
    <p class="not-found">Post not found.</p>
    <router-link to="/blog" class="back-link">← Back to blog</router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BlogPostModel from "@/model/BlogPostModel";
import TagBadge from "@/components/TagBadge.vue";
import data from "@/assets/blog.json";

const route = useRoute();

const posts = computed(() => data.map(BlogPostModel.fromJson));

const post = computed(() =>
  posts.value.find((p) => p.slug === route.params.slug),
);

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
</script>

<style scoped>
.page {
  max-width: 760px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.back-link:hover {
  color: var(--accent);
}

.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin-bottom: 0.875rem;
}

.meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.date {
  font-size: 0.8rem;
  color: var(--text-muted);
  white-space: nowrap;
}

.tags {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.not-found {
  color: var(--text-muted);
  margin-bottom: 1rem;
}

/* Rendered Markdown content */
.post-content {
  color: var(--text);
  font-size: 0.975rem;
  line-height: 1.75;
}

.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 2rem 0 0.875rem;
}

.post-content :deep(h1) {
  font-size: 1.4rem;
}

.post-content :deep(h2) {
  font-size: 1.2rem;
}

.post-content :deep(h3) {
  font-size: 1.05rem;
}

.post-content :deep(p) {
  margin-bottom: 1.1rem;
}

.post-content :deep(a) {
  color: var(--accent);
  text-decoration: underline;
  text-decoration-color: rgba(88, 166, 255, 0.3);
  text-underline-offset: 2px;
}

.post-content :deep(a):hover {
  color: var(--accent-hover);
}

.post-content :deep(ul),
.post-content :deep(ol) {
  margin: 0 0 1.1rem 1.25rem;
}

.post-content :deep(li) {
  margin-bottom: 0.35rem;
}

.post-content :deep(code) {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.1rem 0.35rem;
}

.post-content :deep(pre) {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1rem;
  overflow-x: auto;
  margin-bottom: 1.1rem;
}

.post-content :deep(pre code) {
  background: none;
  border: none;
  padding: 0;
}

.post-content :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding-left: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.1rem;
}
</style>
