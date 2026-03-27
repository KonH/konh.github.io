<template>
  <div class="page">
    <header class="page-header">
      <h1 class="page-title">Contacts</h1>
      <p class="page-subtitle">
        Feel free to reach out — I'm always open to new conversations.
      </p>
    </header>

    <div class="cards">
      <Contact v-for="c in contacts" :key="c.title" :model="c" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ContactModel from "@/model/ContactModel";
import Contact from "@/components/Contact.vue";

const contacts = computed(() => ContactModel.load());
</script>

<style scoped>
.page {
  max-width: 600px;
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

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
