<template>
  <div>
    <img alt="Avatar" src="../assets/home/avatar.jpg" />

    <h1>Hello!</h1>

    <nav>
      <a>My name is Konstantin, I am an experienced technology expert with a focus on Unity, C#, and ASP.NET Core.</a>
    </nav>
    <nav>
      <a>My expertise includes developing core game features, analytics services, custom SDKs, admin tools, integrating plugins and BaaS solutions.</a>
    </nav>
    <nav>
      <a>I am skilled in infrastructure management using Docker and AWS, CI/CD pipelines with TeamCity, and also prioritizing code quality through code review.</a>
    </nav>
    <nav>
      <a>You can find my resume <a href="/Konstantin_Khitrykh_CV.pdf">here</a>.</a>
    </nav>
    <nav>
      <a>
        More information about my work experience &amp; skills you can find
        <router-link to="/work">here</router-link> and
        <router-link to="/skills">here</router-link>.
      </a>
    </nav>

    <br/>

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
