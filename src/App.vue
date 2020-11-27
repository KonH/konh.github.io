<template>
  <h3 id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/work">Work</router-link>
    <router-link to="/skills">Skills</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/pull_requests">Pull Requests</router-link>
    <router-link to="/contacts">Contacts</router-link>
  </h3>
  <router-view id="view" v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.background {
  background-color: black;
}

#nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#nav a {
  font-size: 150%;
  margin: 0.5rem;
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

a:hover {
  color: rgb(255, 153, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
