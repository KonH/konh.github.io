<template>
  <div>
    <h3>{{ model.title }}</h3>
    <ul>
      <li v-for="k in model.keys" :key="k" v-html="k"></li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import SkillModel from "@/model/SkillModel";

export default class Skill extends Vue {
  @Prop()
  model!: SkillModel;
}
</script>
