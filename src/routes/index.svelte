<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	let username: string = '';
	let showForm: boolean = false;
    let timeout = 6000;
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

{#if showForm}
	<form on:submit|preventDefault={handleSubmit}>
		<label for="username">Username:</label>
		<input id="username" type="text" bind:value={username} required />
		<button type="submit">Save</button>
	</form>
{:else}
	<p>Welcome, {username}!</p>
  <button on:click={() => goto('/chat')}>Go to Home (You will be redirected in {timeout/1000} seconds)</button>
{/if}
