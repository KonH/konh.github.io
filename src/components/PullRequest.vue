<template>
  <div>
    <a class="repository">{{ model.repositoryName() }}</a
    ><br />
    <a :href="model.htmlUrl" class="link">{{ model.title }}</a>
  </div>
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

.repository {
  font-size: 150%;
}

.link {
  margin-left: 1.5rem;
}
</style>
