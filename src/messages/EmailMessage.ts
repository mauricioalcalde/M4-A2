import { Message } from "./Message";

export class EmailMessage implements Message {
  public readonly recipient: string;
  public readonly content: string;
  public readonly subject: string;

  constructor(recipient: string, content: string, subject: string) {
    this.recipient = recipient;
    this.content = content;
    this.subject = subject;
  }

  public send(): void {
    console.log(`[Email] Enviando Email a ${this.recipient} | subject="${this.subject}" | content="${this.content}"`);
  }
}
