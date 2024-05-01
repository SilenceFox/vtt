<script lang="ts">
	import { io } from '$lib/webSocketConnection.js';
	import { onMount } from 'svelte';

	let textfield = '';
	let username = '';

	let messages: any[] = [];

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
	<div class="container">
		<header class=" container-header">
			<i class="nf nf-fa-skull"></i>
			<span>{username}</span>
		</header>

		<div class="container-content">
			{#each messages as message}
				<div class="chat-message">
					<span class="message-time">
						<b>{message.from}</b>
						<i>{message.time}</i>
					</span>
					<span class="message-content">
						{message.message}
					</span>
				</div>
				<div class="chat-user-message">
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

		<form
			action="#"
			on:submit|preventDefault={sendMessage}
			class="container-footer"
		>
			<input
				type="text"
				bind:value={textfield}
				placeholder="Digite sua mensagem..."
				class="chat-text"
			/>
			<button type="submit" class="chat-button">
				<i class="nf nf-md-send"></i>
			</button>
		</form>
	</div>
<style>
	@import "https://www.nerdfonts.com/assets/css/webfont.css";
	@import './styles.css';
</style>
