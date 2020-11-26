<template>
  <li>
    <div>
      <a :href="model.htmlUrl">{{ model.name }}</a> {{ model.language }}<br />
      {{ model.description }}
    </div>
  </li>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ProjectModel from "@/model/ProjectModel";

export default class Project extends Vue {
  @Prop()
  model!: ProjectModel;
}
</script>
<style scoped>
div {
  margin-bottom: 1rem;
}
</style>
