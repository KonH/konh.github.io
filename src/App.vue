<template>
  <p id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/pull_requests">Pull Requests</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </p>
  <router-view id="view" />
</template>

<style>
.root {
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
}

.background {
  background-color: rgb(0, 3, 17);
}

#nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#nav a {
  font-size: 150%;
  font-weight: bold;
  margin: 0.5rem;
}

.router-link-active {
  color: white !important;
}

#view {
  margin-top: 8rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a3d3ff;
  margin-top: 80px;
}

a:any-link {
  color: rgb(255, 243, 131);
  text-decoration: none;
}

a:any-link:hover {
  color: rgb(255, 153, 0);
}
</style>
