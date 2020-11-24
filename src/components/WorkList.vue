<template>
  <work v-for="w in works" :key="w.company.title" :model="w" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkModel from "@/model/WorkModel";
import Work from "@/components/Work.vue";
import data from "@/assets/work.json";

@Options({
  components: { Work },
})
export default class ProjectList extends Vue {
  get works() {
    return data.map(WorkModel.fromJson);
  }
}
</script>
