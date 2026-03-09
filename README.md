# Cross-Platform Notification System — Factory Method + Abstract Factory (TypeScript)

Se implementó un sistema de notificaciones multiplataforma (Web, Mobile, Desktop) con soporte de mensajes (Email, SMS) para demostrar:
- Factory Method: creación de mensajes desacoplada del cliente.
- Abstract Factory: selección de familia de productos por plataforma (Notifier).

## Contenido
- `src/messages/*`: interfaz `Message` y mensajes concretos.
- `src/factories/*`: fábricas de mensajes (Factory Method) y fábricas de plataforma (Abstract Factory).
- `src/notifiers/*`: `Notifier` y notificadores concretos por plataforma.
- `src/tests/positive/*`: pruebas de aprobación.
- `src/tests/negative/*`: suite negativa (debe fallar cuando el sistema está correcto), usada para demostrar detección de comportamientos incorrectos.
- `evidence/*`: logs de validación y ejecución.

## Validación observada
Detalle y evidencia consolidada en `SUBMISSION.md`.
