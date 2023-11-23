

<template>
	<!-- Popup -->

	<!-- input要素の配置は、ポップアップ部分より前にする -->
	<input type="checkbox" id="popup" class="popup_check">

	<!-- ポップアップ部分 -->
	<div id="overlay">
		<label for="popup" id="bg_gray"></label> <!-- ウィンドウの外のグレーの領域 -->

		<div id="window"> <!-- ウィンドウ部分 -->
			<label for="popup" id="btn_cloth"> <!-- 閉じるボタン -->
				<span></span>
			</label>
			<div id="msg"> <!-- ウィンドウのコンテンツ -->
				<span v-html="popup_text"></span>
			</div>
		</div>
	</div>


	<h1>Point Station</h1>
	<br>
	<p>現在のポイント</p>
	<h1 style="font-size: 60px;">{{ point }}</h1>
	<button @click="show(`<p>Hello!<br>You got ${point} point!</p>`)">aa</button>
</template>

<script setup>
import { ref } from 'vue';
import * as moment from 'moment';
import StorageLib from './localStorage';

function show(text) {
	const box = document.getElementById("popup");
	box.checked = true;

	popup_text.value = text;
}


const point = ref(Number(localStorage.getItem("point")));
const popup_text = ref("Test popup text");

if (!StorageLib.has_localStorage("lastlogin_date")) {
	// localStorage.setItem("lastlogin_date", moment().format("YYYY/MM/DD"));
	localStorage.setItem("lastlogin_date", "2023/11/22");
}

function login_check() {
	const lastlogin_date = ref(moment(localStorage.getItem("lastlogin_date"), "YYYY/MM/DD"));

	// console.log(lastlogin_date.value, moment());
	console.log(lastlogin_date.value.diff(moment(), "days"), true);
	if (lastlogin_date.value.diff(moment(), "days", true) <= -1 && lastlogin_date.value.diff(moment(), "days", true) >= -2) {
		// alert("A");
		show('<span class="material-symbols-rounded" style="font-size: 100px;color: rgb(255, 240, 28);">featured_seasonal_and_gifts</span><h1>Login Bonus!</h1>');
		console.log("Update")
		point.value += 30;
	}
	lastlogin_date.value = moment();
	localStorage.setItem("lastlogin_date", lastlogin_date.value.format("YYYY/MM/DD"));
}

setTimeout(login_check, 0);
</script>
