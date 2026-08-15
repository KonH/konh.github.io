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

    <div ref="contentEl" class="post-content" v-html="post.contentHtml"></div>
  </div>
  <div v-else class="page">
    <p class="not-found">Post not found.</p>
    <router-link to="/blog" class="back-link">← Back to blog</router-link>
  </div>

  <Teleport to="body">
    <div
      v-if="lightboxSrc"
      class="lightbox-backdrop"
      @click="closeLightbox"
      @keydown.esc="closeLightbox"
    >
      <button
        type="button"
        class="lightbox-close"
        aria-label="Close"
        @click.stop="closeLightbox"
      >
        ×
      </button>
      <img :src="lightboxSrc" :alt="lightboxAlt" class="lightbox-img" @click="closeLightbox" />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from "vue";
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

// Image lightbox: every image in the rendered post body gets a hover-visible
// expand control (bottom-right corner) that opens a fullscreen, blurred-backdrop
// view. Closing works via the × button, clicking the backdrop, or clicking the
// enlarged image itself.
const contentEl = ref<HTMLElement | null>(null);
const lightboxSrc = ref<string | null>(null);
const lightboxAlt = ref("");

function openLightbox(src: string, alt: string) {
  lightboxSrc.value = src;
  lightboxAlt.value = alt;
}

function closeLightbox() {
  lightboxSrc.value = null;
}

function onEscape(e: KeyboardEvent) {
  if (e.key === "Escape") closeLightbox();
}

function setupImageExpand() {
  const container = contentEl.value;
  if (!container) return;
  const imgs = container.querySelectorAll<HTMLImageElement>(
    "img:not([data-expand-ready])",
  );
  imgs.forEach((img) => {
    img.setAttribute("data-expand-ready", "1");
    const wrap = document.createElement("span");
    wrap.className = "img-expand-wrap";
    img.parentNode?.insertBefore(wrap, img);
    wrap.appendChild(img);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "img-expand-btn";
    btn.setAttribute("aria-label", "Expand image");
    btn.textContent = "⤢";
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(img.getAttribute("src") ?? "", img.getAttribute("alt") ?? "");
    });
    wrap.appendChild(btn);
  });
}

onMounted(() => {
  nextTick(setupImageExpand);
  window.addEventListener("keydown", onEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onEscape);
});

watch(post, () => {
  nextTick(setupImageExpand);
});
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

.post-content :deep(figure) {
  margin: 0 0 1.1rem;
}

.post-content :deep(figcaption) {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.6rem;
  text-align: center;
}

.post-content :deep(table) {
  width: 100%;
  margin: 0 auto 1.1rem;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.post-content :deep(th),
.post-content :deep(td) {
  border: 1px solid var(--border);
  padding: 0.6rem 1rem;
  text-align: left;
}

.post-content :deep(th) {
  background: var(--bg-elevated);
  font-weight: 700;
  color: var(--text);
}

.post-content :deep(td) {
  color: var(--text);
}

.post-content :deep(tr:nth-child(even) td) {
  background: rgba(255, 255, 255, 0.02);
}

/* Image expand control */
.post-content :deep(.img-expand-wrap) {
  position: relative;
  display: block;
}

/* Standalone images (not inside a <figure>, which already carries its own
   margin) still need breathing room below them. */
.post-content > :deep(.img-expand-wrap) {
  margin-bottom: 1.1rem;
}

.post-content :deep(.img-expand-btn) {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(10, 12, 16, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 17px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.55;
  transition: opacity 0.15s ease, background 0.15s ease;
}

.post-content :deep(.img-expand-wrap:hover .img-expand-btn),
.post-content :deep(.img-expand-btn:focus-visible) {
  opacity: 1;
  background: rgba(10, 12, 16, 0.85);
}

/* Fullscreen lightbox */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(8, 10, 14, 0.78);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  cursor: zoom-out;
}

.lightbox-img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
}

.lightbox-close {
  position: fixed;
  top: 1.25rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.24);
}
</style>
