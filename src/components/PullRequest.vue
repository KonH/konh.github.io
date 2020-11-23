<template>
  <div>
    <a :href="model.htmlUrl"
      >{{ model.repositoryName() }} / {{ model.title }}</a
    >
    (merged: {{ model.merged }}, created at: {{ model.createdAt }})
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
