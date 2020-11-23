<template>
  <div>
    <img
      :src="require('@/assets/contacts/' + model.icon)"
      width="32"
      :alt="model.title"
    />
    <a :href="model.url">{{ model.title }}</a>
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
