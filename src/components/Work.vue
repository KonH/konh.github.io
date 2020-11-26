<template>
  <div>
    <h1>
      <img
        :src="require('@/assets/work/' + model.company.icon)"
        :alt="model.company.title"
      />
      {{ model.position }} at
      <a :href="model.company.url">{{ model.company.title }}</a>
    </h1>
    {{ model.time.from }} to {{ model.time.to }}

    <h2>Experience:</h2>
    <div class="content">
      <ul>
        <li v-for="e in model.experience" :key="e">{{ e }}</li>
      </ul>
    </div>
    <h2>Projects:</h2>
    <div class="content">
      <ul>
        <li v-for="p in model.projects" :key="p.title">
          <a :href="p.url">{{ p.title }}</a>
        </li>
      </ul>
    </div>
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
<style scoped>
img {
  width: 4rem;
  height: auto;
}
</style>
