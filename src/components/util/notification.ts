import { notify } from './notification.svelte';

export enum NotificationType {
  INFO = 'info',
  WARN = 'warn',
  NORMAL = 'normal',
  URGENT = 'urgent',
}

export function showNotification(message: string, type: NotificationType = NotificationType.NORMAL, duration = 3000) {
  notify(message, { type, duration });
}
