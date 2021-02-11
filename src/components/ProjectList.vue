<template>
  <div class="root">
    <div>
      <project v-for="p in projects" :key="p.name" :model="p" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProjectModel from "@/model/ProjectModel";
import Project from "@/components/Project.vue";
import userData from "@/assets/repositories_user.json";
import gjdtData from "@/assets/repositories_gjdt.json";
import tucData from "@/assets/repositories_tuc.json";

@Options({
  components: { Project },
})
export default class ProjectList extends Vue {
  get projects() {
    return this.merge()
      .map(ProjectModel.fromJson)
      .filter((p: ProjectModel) => !p.archived && !p.fork)
      .map(this.tryFix)
      .sort(
        (a: ProjectModel, b: ProjectModel) =>
          b.updatedAt.getTime() - a.updatedAt.getTime()
      );
  }

  merge() {
    return userData.concat(gjdtData).concat(tucData);
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
