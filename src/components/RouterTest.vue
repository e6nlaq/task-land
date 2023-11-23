<!-- <script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script> -->
<script setup>

import { ref } from 'vue';

const val = ref(localStorage.getItem("word"));

function set() {
	const el = document.getElementById('val_box');

	val.value = el.value;
	localStorage.setItem("word", el.value);
}

</script>

<template>
	<h1>Tem</h1>
	<p>{{ val }}</p>
	<input type="text" id="val_box">
	<button v-on:click="set()">enter</button>
</template>
