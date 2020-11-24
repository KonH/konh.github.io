<template>
  <work v-for="w in works" :key="w.company.title" :model="w" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkModel from "@/model/WorkModel";
import Work from "@/components/Work.vue";

@Options({
  components: { Work },
})
export default class ProjectList extends Vue {
  get works() {
    return WorkModel.load();
  }
}
</script>
