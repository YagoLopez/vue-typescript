<!--todo: use repository and model-->
<!--todo: use vuetify notification instead of window.alert-->
<!--todo: create branch using vuex-->

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    width: 100%;
    display: block;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 20px 20px;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .toolbar {
    margin-bottom: 100px;
  }
</style>

<template>
  <div id="app">
    <v-toolbar class="toolbar">
      <v-toolbar-items id="nav">
        <v-btn text>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/create">Create</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/about">About</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <keep-alive>
      <router-view :key="$route.fullPath"/>
    </keep-alive>
  </div>
</template>
