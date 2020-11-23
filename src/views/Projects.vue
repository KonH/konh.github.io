<template>
  <div class="projects">
    <project-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProjectList from "@/components/ProjectList.vue";

@Options({
  components: {
    ProjectList,
  },
})
export default class Projects extends Vue {}
</script>
