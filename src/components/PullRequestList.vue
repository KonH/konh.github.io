<template>
  <pull-request v-for="p in pullRequests" :key="p.title" :model="p" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PullRequestModel from "@/model/PullRequestModel";
import PullRequest from "@/components/PullRequest.vue";
import data from "@/assets/pull_requests.json";

@Options({
  components: { PullRequest },
})
export default class PullRequestList extends Vue {
  get pullRequests() {
    return data
      .map(PullRequestModel.fromJson)
      .filter(
        (p: PullRequestModel) =>
          !this.isSelfPr(p) && !this.isSmallPr(p.title.toLowerCase())
      )
      .sort(
        (a: PullRequestModel, b: PullRequestModel) =>
          b.createdAt.getTime() - a.createdAt.getTime()
      );
  }

  isSelfPr(pr: PullRequestModel) {
    return pr.ownerName() == "KonH" || pr.repositoryName().startsWith("LD");
  }

  isSmallPr(title: string) {
    return (
      title.includes("typo") ||
      title.includes("spelling") ||
      title.includes("readme") ||
      title.includes("license") ||
      title.includes("docs") ||
      title.includes("table of contents") ||
      title.includes("unused variable")
    );
  }
}
</script>
