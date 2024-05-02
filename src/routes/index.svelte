<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let username: string = '';
	let showForm: boolean = false;
    let timeout = 6000 * 1000;
	onMount(() => {
		const storedUsername: string | null = localStorage.getItem('username');
		if (storedUsername) {
			username = storedUsername;
		} else {
			showForm = true;
		} // If showForm is false (meaning the form should not be shown), redirect to /chat
		if (!showForm) {
           setTimeout(() => {
                    goto('/chat');
                }, timeout);
		}
	});
	function handleSubmit() {
		localStorage.setItem('username', username);
		goto('/chat'); // Redirect to chat page
	}
</script>

<div class="container-greet">
	{#if showForm}
		<form id="login-form" on:submit|preventDefault={handleSubmit}>
				<label for="username">
					<i class="user-icon nf nf-oct-person_fill"></i>
				</label>
				<input id="username" type="text" bind:value={username} placeholder="Username..." required />
			<button class="form-submit" type="submit">
				<i class="nf nf-fa-play"></i>
			</button>
		</form>
	{:else}
		<div id="greeting">
			Welcome,
			<span>
				{username}
			</span>
		</div>
		<button on:click={() => goto('/chat')}>
			<i class="nf nf-fa-play"></i>
		</button>
		<span id="timeout-greet">
			You will be redirected in {timeout/1000} seconds
		</span>
	{/if}
</div>

<style>
	@import 'https://www.nerdfonts.com/assets/css/webfont.css';
	@import './styles.css';
</style>
