<template>
  <contact v-for="c in contacts" :key="c.title" :model="c" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactModel from "@/model/ContactModel";
import Contact from "@/components/Contact.vue";
import data from "@/assets/contacts.json";

@Options({
  components: { Contact },
})
export default class ProjectList extends Vue {
  get contacts() {
    return data.map(ContactModel.fromJson);
  }
}
</script>
