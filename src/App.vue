
<template>
  <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <div id="app">
    <div id="nav" class="tab-area-base">
      <ul class="tab-menu-base">
        <li>
          <!-- <div class="tab"> -->
          <!-- <span class="material-symbols-rounded icon"> -->
          <!-- checklist</span> -->

          <RouterLink to="/">
            <div class="tab">
              <span class="material-symbols-rounded">
                checklist
              </span>
              Task
            </div>
          </RouterLink>
          <!-- </div> -->
        </li>
        <li>
          <RouterLink to="/point">
            <div class="tab">
              <span class="material-symbols-rounded">
                shopping_cart
              </span>
              Point Station
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/setting">
            <div class="tab">
              <span class="material-symbols-rounded">
                settings
              </span>
              Setting
            </div>

          </RouterLink>
        </li>
      </ul>
    </div>
    <br>
    <RouterView />
  </div>
</template>

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
  font-family: '源ノ角ゴシック', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  margin: 5px 5px 0 0;
  padding: 5px;
  /* padding: 10px 100px 0 100px; */
  background: rgb(240, 240, 240);
  border-radius: 10px 10px 0 0;
  height: 100%;
  width: 180px;
  font-size: 1.1rem;
  text-align: center;
}

ul.tab-menu-base li a {
  color: rgb(19, 157, 255);
}

ul.tab-menu-base li.current {
  background: rgb(240, 240, 240);
}

.tasklist {
  text-align: left;
  display: inline-block;
}

.point_view {
  background-color: rgba(66, 255, 98, 0.68);
  position: fixed;
  padding: 20px;
  right: 20px;
  top: 100px;
  border-radius: 10px;
}

.reset_block>button {
  color: red;
  margin: 5px;
}

/* Popup */
.popup_check {
  display: none;
}

/* ポップアップwindow部分 */
#overlay {
  visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 70;
  width: 100%;
  height: 100%;
}

/* オーバーレイの背景部分 */
#bg_gray {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 80;
}

/* ウィンドウ部分 */
#window {
  width: 50%;
  padding: 20px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -6px rgba(0, 0, 0, 0.6);
  z-index: 90;
  opacity: 0;
}

/* 閉じるボタン */
#btn_cloth {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CE5D8B;
  border-radius: 5px;
  z-index: 100;
  cursor: pointer;
}

#btn_cloth:hover {
  opacity: 0.7;
}

#btn_cloth span,
#btn_cloth span::before {
  display: block;
  height: 3px;
  width: 25px;
  border-radius: 3px;
  background: #fff;
}

#btn_cloth span {
  transform: rotate(45deg);
}

#btn_cloth span::before {
  content: "";
  position: absolute;
  bottom: 0;
  transform: rotate(-90deg);
}


/* クリックで表示 */
#popup:checked~#overlay {
  visibility: visible;
}

#popup:checked~#overlay #window {
  animation: fadein 500ms forwards;
  animation-timing-function: ease-in-out;
}

@keyframes fadein {
  100% {
    opacity: 1;
  }
}


/* コンテンツ部分のスタイル */
body {
  margin: 30px;
}


#txt_label {
  text-decoration: underline;
  cursor: pointer;
}

#txt_label:hover {
  opacity: 0.7;
}


#msg a {
  display: inline-block;
  color: #fff;
  background: #CE5D8B;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  text-decoration: none;
}

#msg a:hover {
  opacity: 0.7;
}

/* Google Icons */
.material-symbols-rounded {
  display: inline-flex;
  font-size: 18px;
  vertical-align: middle;
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 20
}

.tab {
  display: inline-flex;
  align-items: center;
}
</style>
