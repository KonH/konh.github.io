<template>
  <div class="contacts">
    <contact-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactList from "@/components/ContactList.vue";

@Options({
  components: {
    ContactList,
  },
})
export default class Contacts extends Vue {}
</script>
