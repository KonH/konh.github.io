<template>
  <div class="works">
    <work-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import WorkList from "@/components/WorkList.vue";

@Options({
  components: {
    WorkList,
  },
})
export default class Works extends Vue {}
</script>
