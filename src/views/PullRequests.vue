<template>
  <div class="pull_requests">
    <pull-request-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PullRequestList from "@/components/PullRequestList.vue";

@Options({
  components: {
    PullRequestList,
  },
})
export default class PullRequests extends Vue {}
</script>
