import { Notifier } from "./Notifier";
import { Message } from "../messages/Message";
import { MessageFactory } from "../factories/MessageFactory";

export class MobileNotifier implements Notifier {
  constructor(private readonly messageFactory?: MessageFactory) {}

  public displayNotification(message: Message): void {
    console.log(`[Mobile UI] Mostrando en móvil: to=${message.recipient} | "${message.content}"`);
  }

  public notify(recipient: string, content: string): void {
    if (!this.messageFactory) throw new Error("MobileNotifier.notify() requiere una MessageFactory en el constructor.");
    const message = this.messageFactory.createMessage(recipient, content);
    message.send();
    this.displayNotification(message);
  }
}
