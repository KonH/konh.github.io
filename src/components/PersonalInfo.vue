<template>
  <div>
    <img alt="Avatar" src="../assets/home/avatar.jpg" />
    <h1>Hello!</h1>

    <p>I am Konstantin, and my expertise is Unity/.NET development.</p>
    <p>
      Now I am working on mobile F2P
      <a href="https://www.bigfishgames.com/us/en/game/cooking-craze.html">
        project</a
      >
      in <a href="https://matryoshka.com/">Matryoshka Games</a>.
    </p>
    <p>
      More information about my work experience &amp; skills you can find
      <router-link to="/work">here</router-link> and
      <router-link to="/skills">here</router-link>.
    </p>
    <p>
      In spare time I investigating different stacks and trying new things, pet
      projects listed <router-link to="/projects">here</router-link>.
    </p>
    <p>
      Also, I'm Open-Source Software enthusiast and have active github
      <a href="https://github.com/KonH">profile</a>, including some
      <router-link to="/pull_requests">pull requests</router-link>.
    </p>
    <p>
      You can contact me
      <router-link to="/contacts">here</router-link>. Any connections are
      welcome!
    </p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class PersonalInfo extends Vue {}
</script>
<style scoped>
img {
  width: 16rem;
  height: 16rem;
}

div {
  text-align: center;
}
</style>
