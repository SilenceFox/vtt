<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import Notification from "./Notification.svelte";

  // Define types for event and notifications array
  type NotificationDetail = {
    level: string,
    message: string,
    title: string
  };

  let notifications: NotificationDetail[] = []; // Array to hold notifications
  const dispatch = createEventDispatcher(); // Event dispatcher

  // Add event listener to listen for 'addNotification' event
  onMount(() => {
    console.log("Event listener added");
    const handleAddNotification = (event: CustomEvent<NotificationDetail>) => {
      notifications.push(event.detail); // Push new notification details to the array
      console.log("Received addNotification event:", event.detail);
    };
    window.addEventListener('addNotification', handleAddNotification as EventListenerOrEventListenerObject);

    // Cleanup function to remove the event listener when component is destroyed
    return () => {
      window.removeEventListener('addNotification', handleAddNotification as EventListenerOrEventListenerObject);
    };
  });
</script>

<div class="notification-container">
  <!-- Render each notification in the array -->
  <slot>
  {#each notifications as notification}
    <Notification
      level={notification.level}
      message={notification.message}
      title={notification.title}
    />
  {/each}
  </slot>
</div>

<style>
@import './notificationStyle.css';
</style>
