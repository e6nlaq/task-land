<template>
  <div id="app">
    <div id="nav" class="tab-area-base">
      <ul class="tab-menu-base">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/test">Rounting Test</RouterLink>
        </li>
      </ul>
    </div>
    <br>
    <RouterView />
  </div>
</template>

<!-- <script>
import IndexPages from './components/IndexPages.vue';

export default {
  name: 'App',
  components: {
    IndexPages
  }
}
</script> -->

<style>
body {
  background-color: #eaeaea;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111;
  margin-top: 60px;
}

div.tab-area-base {
  height: 0px;
  width: 95%;
  margin: auto;
}

ul.tab-menu-base {
  overflow: hidden;
  list-style: none;
  margin: 0px auto;
  padding: 0;
  border-bottom: solid 1px;
  border-bottom-color: rgb(200, 200, 200);
}

ul.tab-menu-base li {
  float: left;
  margin: 0px 5px 0 0;
  padding: 5px;
  background: rgb(240, 240, 240);
  border-radius: 10px 10px 0 0;
  height: 100%;
  width: 130px;
  font-size: 1.1em;
  text-align: center;
}

ul.tab-menu-base li a {
  color: rgb(19, 157, 255);
}

ul.tab-menu-base li.current {
  background: rgb(240, 240, 240);
}
</style>
