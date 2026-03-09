import { Message } from "../messages/Message";

export abstract class MessageFactory {
  public abstract createMessage(recipient: string, content: string): Message;
}
