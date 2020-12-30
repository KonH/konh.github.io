<template>
  <div class="root">
    <div class="header">
      <h1>
        <a :href="model.company.url" target="_blank">{{
          model.company.title
        }}</a
        ><br />
        {{ model.position }}
      </h1>
      {{ model.time.from }} to {{ model.time.to }}
    </div>
    <div class="row">
      <div class="element">
        <h2>Projects</h2>
        <div v-for="p in model.projects" :key="p.title">
          <a :href="p.url" target="_blank">{{ p.title }}</a>
        </div>
      </div>
      <div class="element">
        <h2>Experience</h2>
        <ul>
          <li v-for="e in model.experience" :key="e">{{ e }}</li>
        </ul>
      </div>
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
.root {
  margin: 1.4rem;
}

.row {
  display: flex;
  flex-direction: row;
}

.header > h1 {
  margin-block-start: 0rem;
  margin-block-end: 0rem;
}

.element {
  margin-right: 0.4rem;
}

.element > h2 {
  margin-block-start: 0.2rem;
  margin-block-end: 0rem;
}

.element > div {
  margin-left: 0.2rem;
}

.element > ul {
  margin-block-start: 0rem;
  padding-inline-start: 1.1rem;
}
</style>
