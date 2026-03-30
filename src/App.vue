<template>
  <div id="app">
    <header class="site-header">
      <div class="header-inner">
        <router-link to="/" class="logo">
          <span class="logo-bracket">&lt;</span>KonH<span class="logo-bracket">
            /&gt;</span
          >
        </router-link>
        <nav class="desktop-nav" aria-label="Main navigation">
          <router-link to="/">Home</router-link>
          <router-link to="/skills">Skills</router-link>
          <router-link to="/work">Work</router-link>
          <router-link to="/projects">Projects</router-link>
          <router-link to="/pull_requests">Pull Requests</router-link>
          <router-link to="/contacts">Contacts</router-link>
        </nav>
        <button
          class="menu-toggle"
          :aria-expanded="menuOpen.toString()"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
          <span class="bar" :class="{ open: menuOpen }"></span>
        </button>
      </div>
      <nav
        class="mobile-nav"
        :class="{ open: menuOpen }"
        aria-label="Mobile navigation"
      >
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/skills" @click="closeMenu">Skills</router-link>
        <router-link to="/work" @click="closeMenu">Work</router-link>
        <router-link to="/projects" @click="closeMenu">Projects</router-link>
        <router-link to="/pull_requests" @click="closeMenu"
          >Pull Requests</router-link
        >
        <router-link to="/contacts" @click="closeMenu">Contacts</router-link>
      </nav>
    </header>

    <main class="site-main">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>

    <footer class="site-footer">
      <div class="footer-inner">
        <span>© {{ currentYear }} Konstantin Khitrykh</span>
        <span class="sep">·</span>
        <a href="https://github.com/KonH/konh.github.io" target="_blank"
          >Source</a
        >
        <span class="sep">·</span>
        <span>Built with Vue 3</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const menuOpen = ref(false);
const currentYear = computed(() => new Date().getFullYear());

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}
</script>

<style>
/* ─── Design tokens ─────────────────────────────────────── */
:root {
  --bg: #0d1117;
  --bg-surface: #161b22;
  --bg-elevated: #21262d;
  --border: #30363d;
  --text: #e6edf3;
  --text-muted: #8b949e;
  --accent: #58a6ff;
  --accent-hover: #79b8ff;
  --accent-green: #3fb950;
  --font-sans:
    "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui,
    sans-serif;
  --font-mono:
    "JetBrains Mono", "Fira Code", "Cascadia Code", "Consolas", monospace;
  --radius-sm: 4px;
  --radius: 6px;
  --radius-lg: 12px;
  --max-width: 920px;
  --header-height: 60px;
}

/* ─── Reset & base ──────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.15s ease;
}

a:hover {
  color: var(--accent-hover);
}

/* ─── Layout ────────────────────────────────────────────── */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.site-main {
  flex: 1;
  padding-top: var(--header-height);
}

.content-wrapper {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

/* ─── Header ────────────────────────────────────────────── */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ─── Logo ──────────────────────────────────────────────── */
.logo {
  font-family: var(--font-mono);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.02em;
}

.logo:hover {
  color: var(--text);
}

.logo-bracket {
  color: var(--accent);
}

/* ─── Desktop nav ───────────────────────────────────────── */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.desktop-nav a {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-sm);
  transition:
    color 0.15s ease,
    background 0.15s ease;
}

.desktop-nav a:hover {
  color: var(--text);
  background: var(--bg-elevated);
}

.desktop-nav a.router-link-active {
  color: var(--text);
}

.desktop-nav a.router-link-exact-active {
  color: var(--accent);
  background: rgba(88, 166, 255, 0.08);
}

/* ─── Hamburger ─────────────────────────────────────────── */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: background 0.15s;
}

.menu-toggle:hover {
  background: var(--bg-elevated);
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-muted);
  border-radius: 2px;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease,
    background 0.15s;
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
  background: var(--text);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
  background: var(--text);
}

/* ─── Mobile nav ────────────────────────────────────────── */
.mobile-nav {
  display: none;
  flex-direction: column;
  border-top: 1px solid var(--border);
  padding: 0.5rem 1.5rem 1rem;
}

.mobile-nav.open {
  display: flex;
}

.mobile-nav a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.15s;
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a:hover,
.mobile-nav a.router-link-active {
  color: var(--text);
}

.mobile-nav a.router-link-exact-active {
  color: var(--accent);
}

/* ─── Footer ────────────────────────────────────────────── */
.site-footer {
  border-top: 1px solid var(--border);
  background: var(--bg-surface);
  padding: 1.25rem 1.5rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: var(--max-width);
  margin: 0 auto;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-inner a {
  color: var(--text-muted);
}

.footer-inner a:hover {
  color: var(--accent);
}

.sep {
  color: var(--border);
}

/* ─── Responsive ────────────────────────────────────────── */
@media (max-width: 700px) {
  .desktop-nav {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
