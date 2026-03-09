import { Message } from "./Message";

export class SMSMessage implements Message {
  public readonly recipient: string;
  public readonly content: string;
  public readonly senderId: string;

  constructor(recipient: string, content: string, senderId: string) {
    this.recipient = recipient;
    this.content = content;
    this.senderId = senderId;
  }

  public send(): void {
    console.log(`[SMS] Enviando SMS a ${this.recipient} | senderId="${this.senderId}" | content="${this.content}"`);
  }
}
