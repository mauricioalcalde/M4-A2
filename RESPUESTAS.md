# Respuestas — Preguntas guía

## 1) Factory Method
Se aisló la creación de objetos `Message` en fábricas (`EmailMessageFactory`, `SMSMessageFactory`). El cliente opera sobre `MessageFactory` y la interfaz `Message`, sin depender de `new EmailMessage(...)` o `new SMSMessage(...)`. La variación queda concentrada en las subclases que implementan `createMessage()`.

## 2) Abstract Factory
Se encapsuló la selección de plataforma detrás de una fábrica concreta (`WebPlatformFactory`, `MobilePlatformFactory`, `DesktopPlatformFactory`). Una vez elegida la fábrica, `createNotifier()` devuelve un `Notifier` consistente con esa plataforma, evitando combinaciones cruzadas.
