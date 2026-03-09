import test from "node:test";
import { strict as assert } from "node:assert";

import { WebPlatformFactory } from "../../factories/WebPlatformFactory";
import { MobilePlatformFactory } from "../../factories/MobilePlatformFactory";
import { DesktopPlatformFactory } from "../../factories/DesktopPlatformFactory";

import { WebNotifier } from "../../notifiers/WebNotifier";
import { MobileNotifier } from "../../notifiers/MobileNotifier";
import { DesktopNotifier } from "../../notifiers/DesktopNotifier";

import { EmailMessageFactory } from "../../factories/EmailMessageFactory";
import { captureConsole, assertIncludes } from "../test-helpers";

test("Abstract Factory: WebPlatformFactory crea WebNotifier", () => {
  const pf = new WebPlatformFactory();
  const notifier = pf.createNotifier();
  assert.ok(notifier instanceof WebNotifier);
});

test("Abstract Factory: MobilePlatformFactory crea MobileNotifier", () => {
  const pf = new MobilePlatformFactory();
  const notifier = pf.createNotifier();
  assert.ok(notifier instanceof MobileNotifier);
});

test("Abstract Factory: DesktopPlatformFactory crea DesktopNotifier", () => {
  const pf = new DesktopPlatformFactory();
  const notifier = pf.createNotifier();
  assert.ok(notifier instanceof DesktopNotifier);
});

test("Extra credit: Notifier usa MessageFactory inyectada para crear/enviar y luego mostrar", () => {
  const mf = new EmailMessageFactory("Subj");
  const pf = new MobilePlatformFactory();
  const notifier = pf.createNotifier(mf) as unknown as MobileNotifier;

  const lines = captureConsole(() => notifier.notify("x@y.com", "Hola!"));
  assert.equal(lines.length, 2);

  assertIncludes(lines[0], "[Email] Enviando Email a x@y.com");
  assertIncludes(lines[1], "[Mobile UI] Mostrando en móvil:");
  assertIncludes(lines[1], "to=x@y.com");
  assertIncludes(lines[1], '"Hola!"');
});
