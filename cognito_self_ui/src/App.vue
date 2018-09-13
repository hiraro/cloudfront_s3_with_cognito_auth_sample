<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'signup'}">SignUp</router-link> |
      <router-link :to="{ name: 'signin'}">SignIn</router-link> |
      <router-link :to="{ name: 'signout'}">SignOut</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
