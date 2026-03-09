import { MessageFactory } from "./MessageFactory";
import { Message } from "../messages/Message";
import { EmailMessage } from "../messages/EmailMessage";

export class EmailMessageFactory extends MessageFactory {
  constructor(private readonly defaultSubject: string = "Notificación") {
    super();
  }

  public createMessage(recipient: string, content: string): Message {
    return new EmailMessage(recipient, content, this.defaultSubject);
  }
}
