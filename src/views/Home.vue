<template>
  <div class="home">
    <PersonalInfo />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PersonalInfo from "@/components/PersonalInfo.vue";

@Options({
  components: {
    PersonalInfo,
  },
})
export default class Home extends Vue {}
</script>
