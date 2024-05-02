<script lang="ts">
  import { onMount } from 'svelte';

  export let message: string;
  export let level: string = 'medium'; // Default to medium level

  let div: HTMLDivElement;
  let levelClass: string;

  $: {
    // Map the level string to CSS class name
    levelClass = level.toLowerCase();
  }

  onMount(() => {
    const timeout = setTimeout(() => {
      div.style.opacity = '0';
      setTimeout(() => {
        div.remove();
      }, 300);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  });
</script>

<div bind:this={div} class="notification {levelClass}">
  <p>{message}</p>
</div>

<style>
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: opacity 0.3s ease-out; /* Fade-out transition */
    opacity: 0.8;
  }
  .notification p {
    margin: 0;
  }
  .notification:hover {
    opacity: 1;
  }
  /* Define styles for different notification levels */
  .high {
    background-color: lightcoral; /* Red background for high level */
  }
  .medium {
    background-color: lightyellow; /* Yellow background for medium level */
  }
  .low {
    background-color: #f5f5f5; /* White background for low level */
  }
</style>
