<script lang="ts">
 import { onMount } from 'svelte';
 import { goto } from '$app/navigation';
 let username: string = '';
 let showForm: boolean = false;
 onMount(() => {
    const storedUsername: string | null = localStorage.getItem('username');
    if (storedUsername) {
      username = storedUsername;
    } else {
      showForm = true;
    }
 });
 function handleSubmit() {
    localStorage.setItem('username', username);
    goto('/'); // Redirect to the project root
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
 <button on:click={() => goto('/chat')}>Go to Home</button>
{/if}
