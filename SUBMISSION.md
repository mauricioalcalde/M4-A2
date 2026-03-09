# SUBMISSION — Creational Patterns: Software Factories

## Criterios de aprobación (extraídos del enunciado)
1) Factory Method:
   - Existe `Message` con `send()`.
   - Existen `EmailMessage` y `SMSMessage` implementando `Message`.
   - Existe `MessageFactory` abstracta con `createMessage()` retornando `Message`.
   - Existen `EmailMessageFactory` y `SMSMessageFactory` que sobreescriben `createMessage()`.

2) Abstract Factory:
   - Existe `Notifier` con `displayNotification(message: Message): void`.
   - Existen `WebNotifier` y `MobileNotifier` implementando `Notifier` (Desktop opcional).
   - Existe `CrossPlatformFactory` (Abstract Factory) con `createNotifier()`.
   - Existen `WebPlatformFactory` y `MobilePlatformFactory` que crean el `Notifier` correcto.

3) Ejecución demostrable:
   - Un `main.ts` demuestra creación de mensajes por Factory Method.
   - El cliente selecciona plataforma y crea `Notifier` por Abstract Factory.
   - Extra credit: combinación de ambos (Notifier utiliza una `MessageFactory` para crear/enviar y luego mostrar).

4) Preguntas guía respondidas:
   - Respuestas en `RESPUESTAS.md`.

## Mapeo criterio → evidencia en archivos
- `Message` + `send()`:
  - `src/messages/Message.ts`
- `EmailMessage` / `SMSMessage`:
  - `src/messages/EmailMessage.ts`
  - `src/messages/SMSMessage.ts`
- `MessageFactory` + fábricas concretas:
  - `src/factories/MessageFactory.ts`
  - `src/factories/EmailMessageFactory.ts`
  - `src/factories/SMSMessageFactory.ts`
- `Notifier` + productos de plataforma:
  - `src/notifiers/Notifier.ts`
  - `src/notifiers/WebNotifier.ts`
  - `src/notifiers/MobileNotifier.ts`
  - `src/notifiers/DesktopNotifier.ts` (extensión)
- Abstract Factory (plataforma):
  - `src/factories/CrossPlatformFactory.ts`
  - `src/factories/WebPlatformFactory.ts`
  - `src/factories/MobilePlatformFactory.ts`
  - `src/factories/DesktopPlatformFactory.ts` (extensión)
- Demostración de uso:
  - `src/main.ts`
- Pruebas:
  - Positivas: `src/tests/positive/*`
  - Negativas (esperan fallo): `src/tests/negative/*`
  - Helper: `src/tests/test-helpers.ts`
  - Runner de suite negativa: `scripts/expect-fail.js`

## Decisiones de diseño (breve)
- El Factory Method se implementó mediante una clase abstracta `MessageFactory` con el método fábrica `createMessage()`. Cada subclase concentra la lógica de inicialización específica del mensaje.
- El Abstract Factory se implementó con `CrossPlatformFactory`, donde cada fábrica concreta fija la variante (Web/Mobile/Desktop) y fabrica un `Notifier` consistente con esa variante.
- La combinación (extra) se implementó inyectando opcionalmente una `MessageFactory` dentro del `Notifier`, exponiendo `notify()` para crear/enviar el mensaje y luego mostrarlo.

## Evidencia de validación (stack: Node + tsc + node:test)
- `evidence/01_build.log`
- `evidence/02_test_positive.log`
- `evidence/03_test_negative_expected_fail.log`
- `evidence/04_demo_run.log`

## Resultados de validación (observado)
- Entorno: `evidence/ENV.txt`
- Compilación TypeScript: OK (`evidence/01_build.log`)
- Pruebas positivas: OK (`evidence/02_test_positive.log`)
- Suite negativa:
  - Ejecución directa: FAIL (esperado) (contenido en `evidence/03_test_negative_expected_fail.log`)
  - Wrapper de expectativa de fallo (`scripts/expect-fail.js`): OK
- Ejecución de demo (`main.ts` compilado): OK (`evidence/04_demo_run.log`)
