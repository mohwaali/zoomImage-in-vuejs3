<template> 
  <router-view/>
</template>

<style lang="scss">

@font-face {
  font-family: "cairo";
  src: local("cairo"),
   url(./fonts/cairo/Cairo-Regular.ttf) format("truetype");
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
