<template>
  <div>
    <img :src="require('@/assets/contacts/' + model.icon)" :alt="model.title" />
    <a class="item" :href="model.url">{{ model.title }}</a>
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import ContactModel from "@/model/ContactModel";

export default class Contact extends Vue {
  @Prop()
  model!: ContactModel;
}
</script>
<style scoped>
img {
  width: 2rem;
  height: 2rem;
  margin-left: 2rem;
  margin-right: 0.5rem;
}

a {
  font-size: 150%;
}
</style>
