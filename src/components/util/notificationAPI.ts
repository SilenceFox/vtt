// NotificationAPI.ts
type Message = {
  text: string;
};

function showNotification(message: Message) {
  const notification = new Notification(message.text);
}

export function notify(message: string) {
  if (message.trim() === '') {
    return;
  } else {
    showNotification({ text: message });
    console.log('notification sent');
  }
}
