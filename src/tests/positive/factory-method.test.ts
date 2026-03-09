import test from "node:test";
import { strict as assert } from "node:assert";

import { EmailMessageFactory } from "../../factories/EmailMessageFactory";
import { SMSMessageFactory } from "../../factories/SMSMessageFactory";
import { EmailMessage } from "../../messages/EmailMessage";
import { SMSMessage } from "../../messages/SMSMessage";
import { captureConsole, assertIncludes } from "../test-helpers";

test("Factory Method: EmailMessageFactory crea EmailMessage y send() imprime formato esperado", () => {
  const f = new EmailMessageFactory("Hola");
  const msg = f.createMessage("a@b.com", "Contenido");

  assert.ok(msg instanceof EmailMessage);
  const lines = captureConsole(() => msg.send());
  assert.equal(lines.length, 1);

  assertIncludes(lines[0], "[Email] Enviando Email a a@b.com");
  assertIncludes(lines[0], 'subject="Hola"');
  assertIncludes(lines[0], 'content="Contenido"');
});

test("Factory Method: SMSMessageFactory crea SMSMessage y send() imprime formato esperado", () => {
  const f = new SMSMessageFactory("SENDER");
  const msg = f.createMessage("+54911", "OTP");

  assert.ok(msg instanceof SMSMessage);
  const lines = captureConsole(() => msg.send());
  assert.equal(lines.length, 1);

  assertIncludes(lines[0], "[SMS] Enviando SMS a +54911");
  assertIncludes(lines[0], 'senderId="SENDER"');
  assertIncludes(lines[0], 'content="OTP"');
});
