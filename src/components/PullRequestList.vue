<template>
  <div class="root">
    <div>
      <pull-request v-for="p in pullRequests" :key="p.title" :model="p" />
    </div>
  </div>
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
        (p: PullRequestModel) => !this.isSelfPr(p) && !this.isSmallPr(p.htmlUrl)
      )
      .sort(
        (a: PullRequestModel, b: PullRequestModel) =>
          b.createdAt.getTime() - a.createdAt.getTime()
      );
  }

  isSelfPr(pr: PullRequestModel) {
    return pr.ownerName() == "KonH" || pr.repositoryName().startsWith("LD");
  }

  isSmallPr(url: string) {
    const urls = [
      "https://github.com/webview-cs/webview-cs/pull/32",
      "https://github.com/nuke-build/nuke/pull/567",
      "https://github.com/HolyMonkey/unity-typed-scenes/pull/16",
      "https://github.com/facebook/jest/pull/10260",
      "https://github.com/Unity-Technologies/NavMeshComponents/pull/131",
      "https://github.com/microsoft/xbox-live-unity-plugin/pull/275",
      "https://github.com/gwiazdorrr/BetterStreamingAssets/pull/5",
      "https://github.com/neuecc/UniRx/pull/384",
      "https://github.com/ByronMayne/Weaver/pull/17",
      "https://github.com/dotnet/BenchmarkDotNet/pull/930",
      "https://github.com/stryker-mutator/stryker-net/pull/153",
      "https://github.com/dkozar/edriven/pull/4",
      "https://github.com/learningt2cod3/Creature-Miniature/pull/3",
      "https://github.com/Real-Serious-Games/C-Sharp-Promise/pull/79",
      "https://github.com/marijnz/unity-shell/pull/7",
      "https://github.com/Unity-Technologies/unity-cache-server/pull/24",
      "https://github.com/BeardedManStudios/ForgeNetworkingRemastered/pull/129",
      "https://github.com/yandex/yandex-tank/pull/498",
      "https://github.com/TUC-Team/KazJamGame/pull/1",
      "https://github.com/dotnet/runtime/pull/93479",
      "https://github.com/MessagePack-CSharp/MessagePack-CSharp/pull/1688",
      "https://github.com/awesome-stable-diffusion/awesome-stable-diffusion/pull/53",
      "https://github.com/baba-s/awesome-unity-open-source-on-github/pull/21",
      "https://github.com/proyecto26/awesome-unity/pull/4",
      "https://github.com/insthync/awesome-unity3d/pull/27",
      "https://github.com/michidk/Unity-Script-Collection/pull/43"
    ];
    return urls.includes(url);
  }
}
</script>
