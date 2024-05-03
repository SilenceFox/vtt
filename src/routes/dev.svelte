<!--- import all the development stuff here to try out --->
<script lang="ts">
    import {createEventDispatcher} from 'svelte';
	import Notification from "../components/util/notification/Notification.svelte";
	import NotificationContainer from "../components/util/notification/NotificationContainer.svelte";

    const dispatch = createEventDispatcher();

    function addNotification(level: string, message: string, title: string) {
      dispatch('addNotification', {level, message, title});
      console.log("Adding notification:", level, message, title);
    }
</script>

<body>
  <h1>whats up</h1>

  <NotificationContainer> 
    <Notification message="notification system connected." level="low" title="Done" />
  </NotificationContainer>
    <button on:click={() => addNotification('low', 'notification system connected.', 'Done')}>
      Notify me!
    </button>
</body>


<!--- Put your fancy stuff here --->
<style>
@import './styles.css';
body {
 justify-content: center;
}
h1 {
 color: red;
 font-size: 3rem;
}
button {
 color:white;
}
</style>
