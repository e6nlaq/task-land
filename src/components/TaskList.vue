
<script setup>
import { ref } from 'vue';

// const tasks = ref([
// 	{ name: "A", checked: false },
// 	{ name: "Ajd", checked: true }
// ]);

if (!("tasks" in Object(localStorage))) {
	localStorage.setItem("tasks", '[{"name": "Test", "checked": true}]');
}

if (!("point" in Object(localStorage))) {
	localStorage.setItem("point", "0");
}

const tasks = ref(JSON.parse(localStorage.getItem("tasks")));
const point = ref(Number(localStorage.getItem("point")));

const task_names = ref(new Set());

function save_localstorage() {
	localStorage.setItem("point", String(point.value));
	localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

function change_check(name) {
	for (let i = 0; i < tasks.value.length; i++) {
		if (tasks.value[i].name === name) {
			tasks.value[i].checked = !tasks.value[i].checked;
			point.value += 10;
			save_localstorage();
		}
	}
}

function add_task() {
	let add_name = prompt("タスクの名前を入力してください。");
	if (task_names.value.has(add_name)) {
		alert(`${add_name}というタスクは既に存在しています。`);
	}
	else {
		task_names.value.add(add_name);
		tasks.value.push({ name: add_name, checked: false });
		save_localstorage();
	}
}

// 初期化
for (let i = 0; i < tasks.value.length; ++i) {
	task_names.value.add(tasks.value[i].name);
}
</script>

<template>
	<h1>Task</h1>

	{{ tasks }}
	{{ task_names }}
	<br>

	<div class="point_view">
		{{ point }}
	</div>

	<button @click="add_task()">タスクを追加</button>

	<br>

	<div class="tasklist">
		<ul>
			<li v-for="task in tasks" :key="task.name">
				<input type="checkbox" name="" id="" :checked="task.checked" @change="change_check(task.name)"
					:disabled="task.checked">
				{{ task.name }}
			</li>
		</ul>
	</div>
</template>
