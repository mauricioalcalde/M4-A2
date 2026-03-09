import { Message } from "../messages/Message";

export interface Notifier {
  displayNotification(message: Message): void;
}
