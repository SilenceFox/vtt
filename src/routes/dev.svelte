<!--- import all the development stuff here to try out --->
<script lang="ts">
import { notify } from '../components/util/notification.svelte'; // Adjust the path as necessary
 function triggerNotification() {
    notify('This is a notification message!', { duration: 100 });
 }
</script>
<body>
 <h1>whats up</h1>
 <button on:click={triggerNotification}> Show Notification</button>
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
