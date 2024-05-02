<script lang="ts">
 import { onMount } from 'svelte';
 export let message: string = '';
 export let duration: number = 30; // Duration in milliseconds
 export let type: string = ''; // Assuming you want to use this for styling or other purposes
 let visible: boolean = false;
 onMount(() => {
    visible = true;
    setTimeout(() => {
      visible = false;
    }, duration);
 });
 export function notify(message: string, options: { duration?: number; type?: string } = {}) {
    duration = options.duration || duration;
    type = options.type || type; // Ensure type is updated
    visible = true;
    setTimeout(() => {
      visible = false;
    }, duration);
 }
</script>
{#if visible}
 <div class="notification">
    <p>{message}</p>
 </div>
{/if}
<style>
 .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 }
 .notification-content {
    margin: 0;
 }
</style>
