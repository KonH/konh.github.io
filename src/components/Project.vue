<template>
  <div>
    <a :href="model.htmlUrl">{{ model.name }}</a> (language:
    {{ model.language }}, stars: {{ model.stargazersCount }}, updated at:
    {{ model.updatedAt }})
    <p>{{ model.description }}</p>
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
