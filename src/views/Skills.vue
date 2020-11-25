<template>
  <div class="skills">
    <skill-list />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SkillList from "@/components/SkillList.vue";

@Options({
  components: {
    SkillList,
  },
})
export default class Skills extends Vue {}
</script>
