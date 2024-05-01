<script lang="ts">
	import { io } from '$lib/webSocketConnection.js';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let textfield = '';
	let username = '';
	const storedUsername = localStorage.getItem('username');
	if (storedUsername) {
		username = storedUsername;
	} else {
		username = 'Anonymous';
	}

	let messages: any[] = [];

	onMount(() => {
		io.on('message', (message) => {
			messages = [...messages, message];
		});
		io.on('name', (name) => {
			let username = name;
			// Check localStorage for a stored username
			username = storedUsername;
			// Send the actual username to the server
			io.emit('username', username);
		});
	});

	function sendMessage() {
		const message = textfield.trim();
		if (!message) return;

		textfield = '';
		io.emit('message', message);
	}
</script>

<div class="container">
	<header class=" container-header">
		<button on:click={() => goto('/')}>
			<i class="nf nf-fa-skull" />
		</button>

		<span>{username}</span>
	</header>

	<div class="container-content">
		{#each messages as message}
			<div class={message.from === username ? 'chat-user-message' : 'chat-message'}>
				<span class="message-time">
					<b>{message.from}</b>
					<i>{message.time}</i>
				</span>
				<span class="message-content">
					{message.message}
				</span>
			</div>
		{/each}
	</div>

	<form action="#" on:submit|preventDefault={sendMessage} class="container-footer">
		<input
			type="text"
			bind:value={textfield}
			placeholder="Digite sua mensagem..."
			class="chat-text"
		/>
		<button type="submit" class="chat-button">
			<i class="nf nf-md-send" />
		</button>
	</form>
</div>

<style>
	@import 'https://www.nerdfonts.com/assets/css/webfont.css';
	@import './styles.css';
</style>
