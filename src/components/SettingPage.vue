<script setup>

function all_reset() {
	const user_check = confirm("リセットしてもよろしいですか?\n今まで貯めたポイント、タスクは全て消去されます。\nこの操作は取り消しできません。");
	if (user_check) {
		localStorage.clear();
	}
}

function task_reset() {
	const user_check = confirm("リセットしてもよろしいですか?\nタスクは全て消去されますが、ポイントは消去されません。\nこの操作は取り消しできません。");
	if (user_check) {
		localStorage.setItem("tasks", '[]');
	}
}

</script>

<template>
	<h1>Setting</h1>

	<div class="reset_block">
		<button @click="task_reset()" class="setting">
			<div class="tab">
				<span class="material-symbols-rounded">playlist_remove</span>タスクをリセット
			</div>
		</button>
		<button @click="all_reset()">
			<div class="tab">
				<span class="material-symbols-rounded">delete_forever</span>全てリセット
			</div>
		</button>
	</div>
</template>
