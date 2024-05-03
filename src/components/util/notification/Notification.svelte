<script lang="ts">
  import { onMount } from 'svelte';

  export let message: string;
  export let level: string = 'medium'; // Default to medium level
  export let title: string = '';

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
  <h1>{title}</h1>
  <hr>
  <p>{message}</p>
</div>

<style>
@import './notificationStyle.css';
</style>

