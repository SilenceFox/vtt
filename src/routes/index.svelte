<script lang="ts">
	import { io } from '$lib/webSocketConnection.js';
	import { onMount } from 'svelte';

	let textfield = '';
	let username = '';

	let messages = [];

	onMount(() => {
		io.on('message', (message) => {
			messages = [...messages, message];
		});
		io.on('name', (name) => {
			username = name;
		});
	});

	function sendMessage() {
		const message = textfield.trim();
		if (!message) return;

		textfield = '';
		io.emit('message', message);
	}
</script>

<div class="h-screen w-screen bg-zinc-800 flex justify-end">
	<div class="h-full w-full max-w-md mx-auto bg-zinc-200 flex flex-col border-r border-l border-r-gray-500 border-l-gray-500">
		<header
			class="border-b border-green-600 bg-zinc-900 shrink-0 flex flex-col items-center"
		>
			<span class="sevasto text-xl text-green-500 font-bold">Top Lista Mais Gay</span>
			<span class="sevasto font-serif text-red-800 text-lg italic">Do planeta terra.</span>
			<span>{username}</span>
		</header>

		<div class="h-full w-full p-4 bg-lime-900">
			{#each messages as message}
				<div class="sevasto bg-zinc-300 rounded-xl rounded-tl-none px-4 py-3 my-4 w-fit">
					<span class="flex items-center space-between gap-4">
						<b>{message.from}</b>
						<i>{message.time}</i>
					</span>
					{message.message}
				</div>
			{/each}
		</div>

		<form
			action="#"
			on:submit|preventDefault={sendMessage}
			class="sevasto px-6 py-4 border-t border-zinc-800 bg-zinc-800 text-white shrink-0 flex items-center"
		>
			<input
				type="text"
				bind:value={textfield}
				placeholder="Eu sabo..."
				class="sevasto bg-transparent border-none px-4 py-3 w-full"
			/>
			<button type="submit" class="sevasto shrink-0 border border-white rounded-lg px-4 py-3">Send</button>
		</form>
	</div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
.sevasto {
  font-family: "Ubuntu Mono", monospace;
}
</style>
