<template>
  <li>
    <div>
      {{ model.repositoryName() }}<br />
      <a :class="style" :href="model.htmlUrl">{{ model.title }}</a>
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

  get style() {
    return this.model.merged ? "merged" : "";
  }
}
</script>
<style scoped>
.merged {
  color: rgb(0, 255, 64);
}

div {
  margin-bottom: 1rem;
}
</style>
