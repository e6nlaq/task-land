<template>
  <div id="app">
    <div id="nav" class="tab-area-base">
      <ul class="tab-menu-base">
        <li>
          <RouterLink to="/task-land">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/task-land/test">Rounting Test</RouterLink>
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


<!--
MIT License

Copyright (c) 2018 Hayato Inoue

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


-->
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
