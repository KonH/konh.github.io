<template>
  <div class="content">
    <div>
      <project v-for="p in projects" :key="p.name" :model="p" />
    </div>
  </div>
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
      .map(this.tryFix)
      .sort(
        (a: ProjectModel, b: ProjectModel) =>
          b.updatedAt.getTime() - a.updatedAt.getTime()
      );
  }

  tryFix(m: ProjectModel) {
    const cSharpProjects = [
      "https://github.com/KonH/TetrisGame",
      "https://github.com/KonH/LD44Project",
    ];
    if (cSharpProjects.includes(m.htmlUrl)) {
      m.language = "C#";
    }
    return m;
  }
}
</script>
<style scoped>
.content {
  display: flex;
  justify-content: center;
}
</style>
