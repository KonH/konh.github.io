<template>
  <project v-for="p in projects" :key="p.name" :model="p" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProjectModel from "@/model/ProjectModel";
import Project from "@/components/Project.vue";
import data from "@/assets/repositories.json";

@Options({
  components: { Project },
})
export default class ProjectList extends Vue {
  get projects() {
    return data
      .map(ProjectModel.fromJson)
      .filter((p: ProjectModel) => !p.archived && !p.fork)
      .sort(
        (a: ProjectModel, b: ProjectModel) =>
          b.updatedAt.getTime() - a.updatedAt.getTime()
      );
  }
}
</script>
