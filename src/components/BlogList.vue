<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">Blog</h1>
      <p class="page-subtitle">
        Notes on things I'm building, tools I'm using, and problems I ran into.
      </p>
    </header>

    <div v-if="allTags.length" class="tag-list">
      <TagBadge
        v-for="t in allTags"
        :key="t"
        :tag="t"
        :active="activeTag === t"
      />
    </div>

    <div v-if="filteredPosts.length" class="feed">
      <BlogPostCard v-for="p in filteredPosts" :key="p.slug" :model="p" />
    </div>
    <p v-else class="empty">No posts match this tag yet.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import BlogPostModel from "@/model/BlogPostModel";
import BlogPostCard from "@/components/BlogPostCard.vue";
import TagBadge from "@/components/TagBadge.vue";
import data from "@/assets/blog.json";

const route = useRoute();

const posts = computed(() => data.map(BlogPostModel.fromJson));

const allTags = computed(() => {
  const tags = new Set<string>();
  posts.value.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
});

const activeTag = computed(() => {
  const tag = route.query.tag;
  return typeof tag === "string" ? tag : null;
});

const filteredPosts = computed(() =>
  activeTag.value
    ? posts.value.filter((p) => p.tags.includes(activeTag.value as string))
    : posts.value,
);
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 1.5rem;
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

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.feed {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.empty {
  color: var(--text-muted);
  font-size: 0.9rem;
}
</style>
