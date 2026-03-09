import test from "node:test";
import { strict as assert } from "node:assert";

import { MessageFactory } from "../../factories/MessageFactory";
import { Message } from "../../messages/Message";
import { SMSMessage } from "../../messages/SMSMessage";
import { EmailMessage } from "../../messages/EmailMessage";
import { WebPlatformFactory } from "../../factories/WebPlatformFactory";
import { MobilePlatformFactory } from "../../factories/MobilePlatformFactory";
import { captureConsole } from "../test-helpers";

// Suite negativa: aserciones intencionalmente incorrectas; se espera fallo.

class BrokenEmailFactory extends MessageFactory {
  public createMessage(recipient: string, content: string): Message {
    return new SMSMessage(recipient, content, "BROKEN"); // incorrecto
  }
}

test("Negative suite: BrokenEmailFactory no es EmailMessage", () => {
  const f = new BrokenEmailFactory();
  const msg = f.createMessage("a@b.com", "X");
  assert.ok(msg instanceof EmailMessage); // intencionalmente falso
});

test("Negative suite: SMS send() no coincide con formato de Email", () => {
  const msg = new SMSMessage("+549", "Hola", "ACME");
  const lines = captureConsole(() => msg.send());
  assert.ok(lines[0].includes("[Email] Enviando Email")); // intencionalmente falso
});

test("Negative suite: MobilePlatformFactory no crea WebNotifier", () => {
  const pf = new MobilePlatformFactory();
  const notifier = pf.createNotifier();
  assert.equal(notifier.constructor.name, "WebNotifier"); // intencionalmente falso
});

test("Negative suite: WebPlatformFactory no crea MobileNotifier", () => {
  const pf = new WebPlatformFactory();
  const notifier = pf.createNotifier();
  assert.equal(notifier.constructor.name, "MobileNotifier"); // intencionalmente falso
});
