<template>
  <li>
    <div>
      {{ model.repositoryName() }}<br />
      <a :href="model.htmlUrl">{{ model.title }}</a>
    </div>
  </li>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import PullRequestModel from "@/model/PullRequestModel";

export default class PullRequest extends Vue {
  @Prop()
  model!: PullRequestModel;
}
</script>
<style scoped>
div {
  margin-bottom: 1rem;
}
</style>
