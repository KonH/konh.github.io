<template>
  <div>
    <img
      :src="require('@/assets/work/' + model.company.icon)"
      width="32"
      :alt="model.company.title"
    />
    <h1>
      {{ model.position }} at
      <a :href="model.company.url">{{ model.company.title }}</a>
    </h1>
    {{ model.time.from }} to {{ model.time.to }}
    <h2>Experience:</h2>
    <ul>
      <li v-for="e in model.experience" :key="e">{{ e }}</li>
    </ul>
    <h2>Projects:</h2>
    <li v-for="p in model.projects" :key="p.title">
      <a :href="p.url">{{ p.title }}</a>
    </li>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import WorkModel from "@/model/WorkModel";

export default class Work extends Vue {
  @Prop()
  model!: WorkModel;
}
</script>
