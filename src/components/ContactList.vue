<template>
  <div>
    <contact v-for="c in contacts" :key="c.title" :model="c" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ContactModel from "@/model/ContactModel";
import Contact from "@/components/Contact.vue";

@Options({
  components: { Contact },
})
export default class ProjectList extends Vue {
  get contacts() {
    return ContactModel.load();
  }
}
</script>
<style scoped>
div {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
