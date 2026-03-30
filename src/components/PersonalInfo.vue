<template>
  <section class="hero">
    <div class="avatar-wrap">
      <img
        class="avatar"
        src="../assets/home/avatar.jpg"
        alt="Konstantin Khitrykh"
      />
    </div>

    <h1 class="name">Konstantin Khitrykh</h1>
    <p class="role"><span class="prompt">~/</span> Senior Software Engineer</p>

    <div class="tags">
      <span class="tag">Unity</span>
      <span class="tag">C#</span>
      <span class="tag">ASP.NET Core</span>
      <span class="tag">Docker</span>
      <span class="tag">AWS</span>
    </div>

    <div class="bio">
      <p>
        Experienced technology expert with a focus on Unity, C#, and ASP.NET
        Core. My expertise includes developing core game features, analytics
        services, custom SDKs, admin tools, and integrating plugins and BaaS
        solutions.
      </p>
      <p>
        Skilled in infrastructure management using Docker and AWS, CI/CD
        pipelines with TeamCity, and prioritizing code quality through code
        review. Open-Source Software enthusiast with an active
        <a href="https://github.com/KonH" target="_blank">GitHub profile</a>.
      </p>
    </div>

    <div class="actions">
      <a
        href="/Konstantin_Khitrykh_CV.pdf"
        target="_blank"
        class="btn btn-primary"
      >
        Resume ↗
      </a>
      <router-link to="/skills" class="btn btn-secondary">Skills</router-link>
      <router-link to="/work" class="btn btn-secondary">Work</router-link>
      <router-link to="/projects" class="btn btn-secondary"
        >Projects</router-link
      >
      <router-link to="/pull_requests" class="btn btn-secondary"
        >Pull Requests</router-link
      >
      <router-link to="/contacts" class="btn btn-secondary"
        >Contact</router-link
      >
    </div>

    <div class="quick-stats">
      <div class="stat">
        <span class="stat-value accent">Unity</span>
        <span class="stat-label">Game Dev</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value accent">C#</span>
        <span class="stat-label">Primary Lang</span>
      </div>
      <div class="stat-divider"></div>
      <div class="stat">
        <span class="stat-value accent">OSS</span>
        <span class="stat-label">Contributor</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed — purely presentational
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 0 3rem;
  max-width: 680px;
  margin: 0 auto;
}

/* Avatar */
.avatar-wrap {
  position: relative;
  margin-bottom: 1.5rem;
}

.avatar {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--accent);
  box-shadow:
    0 0 0 4px rgba(88, 166, 255, 0.12),
    0 8px 32px rgba(0, 0, 0, 0.4);
}

/* Name & role */
.name {
  font-size: 2.25rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.03em;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.role {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
}

.prompt {
  color: var(--accent-green);
}

/* Tags */
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent);
  background: rgba(88, 166, 255, 0.08);
  border: 1px solid rgba(88, 166, 255, 0.25);
  padding: 0.2rem 0.65rem;
  border-radius: 999px;
}

/* Bio */
.bio {
  text-align: left;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 2rem;
}

.bio p + p {
  margin-top: 0.875rem;
}

.bio a {
  color: var(--accent);
  font-weight: 500;
}

.bio a:hover {
  color: var(--accent-hover);
}

/* Action buttons */
.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1.125rem;
  border-radius: var(--radius);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease,
    color 0.15s ease;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: var(--font-sans);
}

.btn-primary {
  background: var(--accent);
  color: #0d1117;
  border-color: var(--accent);
}

.btn-primary:hover {
  background: var(--accent-hover);
  border-color: var(--accent-hover);
  color: #0d1117;
}

.btn-secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.btn-secondary:hover {
  background: var(--bg-elevated);
  border-color: var(--accent);
  color: var(--accent);
}

/* Quick stats */
.quick-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125rem;
}

.stat-value {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
}

.stat-value.accent {
  color: var(--accent);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 2rem;
  background: var(--border);
}

/* Responsive */
@media (max-width: 480px) {
  .name {
    font-size: 1.75rem;
  }

  .quick-stats {
    gap: 1rem;
    padding: 0.875rem 1.25rem;
  }
}
</style>
