<template>
  <h3 id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/work">Work</router-link> |
    <router-link to="/skills">Skills</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/pull_requests">Pull Requests</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </h3>
  <router-view id="view" />
</template>

<style>
.background {
  background-color: black;
}

#view {
  margin-top: 60px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a3d3ff;
  margin-top: 80px;
}

a:any-link {
  color: rgb(255, 243, 131);
}

.box {
  display: flex;
  justify-content: center;
}

.content {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.content > ul {
  display: inline-block;
  text-align: left;
}
</style>
