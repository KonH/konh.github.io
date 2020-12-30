<template>
  <div>
    <img alt="Avatar" src="../assets/home/avatar.jpg" />
    <h1>Hello!</h1>

    <nav>
      <a>I am Konstantin, and my expertise is Unity/.NET development.</a>
    </nav>
    <nav>
      <a>
        Now I am working on mobile F2P
        <a
          href="https://www.bigfishgames.com/us/en/game/cooking-craze.html"
          target="_blank"
        >
          project</a
        >
        in
        <a href="https://matryoshka.com/" target="_blank">Matryoshka Games</a>.
      </a>
    </nav>
    <nav>
      <a>
        More information about my work experience &amp; skills you can find
        <router-link to="/work">here</router-link> and
        <router-link to="/skills">here</router-link>.
      </a>
    </nav>
    <nav>
      <a>
        In spare time I investigating different stacks and trying new things,
        pet projects listed <router-link to="/projects">here</router-link>.
      </a>
    </nav>
    <nav>
      <a>
        Also, I'm Open-Source Software enthusiast and have active github
        <a href="https://github.com/KonH" target="_blank">profile</a>, including
        some <router-link to="/pull_requests">pull requests</router-link>.
      </a>
    </nav>
    <nav>
      <a>
        You can contact me
        <router-link to="/contacts">here</router-link>. Any connections are
        welcome!
      </a>
    </nav>
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
