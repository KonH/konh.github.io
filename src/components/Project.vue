<template>
  <div>
    <a :href="model.htmlUrl" target="_blank" class="repository">{{
      model.name
    }}</a>
    <a class="language">{{ model.language }}</a
    ><br />
    <a class="description">{{ model.description }}</a>
  </div>
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

.repository {
  font-size: 150%;
}

.language {
  vertical-align: top;
}

.description {
  margin-left: 1.5rem;
}
</style>
