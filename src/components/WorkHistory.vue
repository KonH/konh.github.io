<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">Work History</h1>
      <p class="page-subtitle">
        Professional experience in game development, backend services, and tech
        leadership.
      </p>
    </header>

    <div class="timeline">
      <article v-for="job in jobs" :key="job.company + job.title" class="job">
        <div class="job-connector">
          <div class="job-dot" :class="{ current: job.current }"></div>
          <div class="job-line"></div>
        </div>

        <div class="job-body">
          <div class="job-header">
            <div class="job-meta">
              <h2 class="job-title">{{ job.title }}</h2>
              <div class="job-company">
                <a
                  v-if="job.url"
                  :href="job.url"
                  target="_blank"
                  class="company-link"
                  >{{ job.company }}</a
                >
                <span v-else>{{ job.company }}</span>
                <span class="separator">·</span>
                <span class="job-location">{{ job.location }}</span>
              </div>
            </div>
            <div class="job-period">
              <span class="period-badge" :class="{ current: job.current }">{{
                job.period
              }}</span>
            </div>
          </div>

          <ul class="job-bullets">
            <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
          </ul>

          <div v-if="job.tags" class="job-tags">
            <span v-for="tag in job.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import WorkModel from "../model/WorkModel";

const jobs = WorkModel.loadAll();
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

/* ─── Timeline ──────────────────────────────────────────── */
.timeline {
  display: flex;
  flex-direction: column;
}

.job {
  display: flex;
  gap: 1.25rem;
}

.job:last-child .job-line {
  display: none;
}

/* ─── Connector ─────────────────────────────────────────── */
.job-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 0.2rem;
}

.job-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--border);
  border: 2px solid var(--bg-surface);
  flex-shrink: 0;
  z-index: 1;
}

.job-dot.current {
  background: var(--accent);
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2);
}

.job-line {
  flex: 1;
  width: 1px;
  background: var(--border);
  margin-top: 4px;
  min-height: 1.5rem;
}

/* ─── Job card ──────────────────────────────────────────── */
.job-body {
  flex: 1;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.25rem;
  transition: border-color 0.15s ease;
}

.job-body:hover {
  border-color: var(--accent);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.job-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 0.2rem;
}

.job-company {
  font-size: 0.875rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.company-link {
  color: var(--accent);
  font-weight: 500;
}

.company-link:hover {
  color: var(--accent-hover);
}

.separator {
  color: var(--border);
}

.job-location {
  color: var(--text-muted);
}

.period-badge {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

.period-badge.current {
  color: var(--accent);
  background: rgba(88, 166, 255, 0.08);
  border-color: rgba(88, 166, 255, 0.3);
}

/* ─── Bullets ───────────────────────────────────────────── */
.job-bullets {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.job-bullets li {
  font-size: 0.875rem;
  color: var(--text-muted);
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;
}

.job-bullets li::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--border);
}

/* ─── Tags ──────────────────────────────────────────────── */
.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent);
  background: rgba(88, 166, 255, 0.08);
  border: 1px solid rgba(88, 166, 255, 0.2);
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 600px) {
  .job-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .job-body {
    padding: 1rem;
  }
}
</style>
