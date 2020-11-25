<template>
  <h1>Core</h1>
  <div v-for="c in coreSkills" :key="c[0]" :model="c">
    <h2>{{ c[0] }}</h2>
    <skill v-for="s in c[1]" :key="s" :model="s" />
  </div>
  <h2>Other</h2>
  <skill v-for="s in otherSkills" :key="s" :model="s" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SkillModel from "@/model/SkillModel";
import Skill from "@/components/Skill.vue";

@Options({
  components: { Skill },
})
export default class SkillList extends Vue {
  get coreSkills() {
    return SkillModel.loadCoreSkills();
  }

  get otherSkills() {
    return SkillModel.loadOtherSkills();
  }
}
</script>
