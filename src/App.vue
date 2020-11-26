<template>
  <h3 id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/work">Work</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/pull_requests">Pull Requests</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </h3>
  <router-view />
</template>

<style>
@font-face {
  font-family: "JetBrainsMono-Regular";
  src: url("fonts/jetbrains-mono/woff/JetBrainsMono-Regular.woff");
}
.background {
  background-color: black;
}
#app {
  font-family: "JetBrainsMono-Regular", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a3d3ff;
  margin-top: 60px;
}

a:any-link {
  color: rgb(255, 243, 131);
}

.box {
  display: flex;
  justify-content: center;
}

.item {
  align-self: center;
}
</style>
