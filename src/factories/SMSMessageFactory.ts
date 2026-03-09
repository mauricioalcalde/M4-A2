import { MessageFactory } from "./MessageFactory";
import { Message } from "../messages/Message";
import { SMSMessage } from "../messages/SMSMessage";

export class SMSMessageFactory extends MessageFactory {
  constructor(private readonly senderId: string = "ACME") {
    super();
  }

  public createMessage(recipient: string, content: string): Message {
    return new SMSMessage(recipient, content, this.senderId);
  }
}
