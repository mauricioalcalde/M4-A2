import { MessageFactory } from "./factories/MessageFactory";
import { EmailMessageFactory } from "./factories/EmailMessageFactory";
import { SMSMessageFactory } from "./factories/SMSMessageFactory";

import { CrossPlatformFactory } from "./factories/CrossPlatformFactory";
import { WebPlatformFactory } from "./factories/WebPlatformFactory";
import { MobilePlatformFactory } from "./factories/MobilePlatformFactory";
import { DesktopPlatformFactory } from "./factories/DesktopPlatformFactory";

import { Notifier } from "./notifiers/Notifier";

function pickMessageFactory(kind: "email" | "sms"): MessageFactory {
  return kind === "email" ? new EmailMessageFactory("Aviso Importante") : new SMSMessageFactory("ACME-SMS");
}

function pickPlatformFactory(platform: "web" | "mobile" | "desktop"): CrossPlatformFactory {
  switch (platform) {
    case "web": return new WebPlatformFactory();
    case "mobile": return new MobilePlatformFactory();
    case "desktop": return new DesktopPlatformFactory();
  }
}

function main(): void {
  console.log("=== Parte 1: Factory Method (creación de mensajes) ===");
  const emailFactory = pickMessageFactory("email");
  const smsFactory = pickMessageFactory("sms");

  const emailMsg = emailFactory.createMessage("user@mail.com", "Tu factura está disponible.");
  const smsMsg = smsFactory.createMessage("+5493411234567", "OTP code: 123456");

  emailMsg.send();
  smsMsg.send();

  console.log("\n=== Parte 2: Abstract Factory (familia por plataforma) ===");
  const platform: "web" | "mobile" | "desktop" = "mobile";
  const platformFactory = pickPlatformFactory(platform);
  const notifier: Notifier = platformFactory.createNotifier();
  notifier.displayNotification(emailMsg);

  console.log("\n=== Extra credit: combinar Abstract Factory + Factory Method ===");
  const notifierWithFactory = platformFactory.createNotifier(pickMessageFactory("sms"));
  const anyNotifier = notifierWithFactory as unknown as { notify?: (r: string, c: string) => void };
  anyNotifier.notify?.("+5493419999999", "Promo: 20% OFF solo hoy.");

  console.log("\n=== Fin demo ===");
}

main();
