# Cross-Platform Notification System

Implementación en TypeScript de un sistema de notificaciones multiplataforma para demostrar la aplicación de los patrones creacionales **Factory Method** y **Abstract Factory**.

## Objetivo

El proyecto resuelve el escenario de un sistema de notificaciones que debe:

- crear distintos tipos de mensajes (`Email`, `SMS`) sin acoplar el código cliente a clases concretas;
- crear componentes de notificación por plataforma (`Web`, `Mobile`, `Desktop`) manteniendo consistencia dentro de cada familia de productos.

## Patrones aplicados

### Factory Method
Se utilizó para encapsular la creación de mensajes.

Componentes principales:
- `Message`
- `EmailMessage`
- `SMSMessage`
- `MessageFactory`
- `EmailMessageFactory`
- `SMSMessageFactory`

### Abstract Factory
Se utilizó para encapsular la creación de notificadores según la plataforma.

Componentes principales:
- `Notifier`
- `WebNotifier`
- `MobileNotifier`
- `DesktopNotifier`
- `CrossPlatformFactory`
- `WebPlatformFactory`
- `MobilePlatformFactory`
- `DesktopPlatformFactory`

## Estructura del proyecto

```text
src/
  factories/
  messages/
  notifiers/
  tests/
    positive/
    negative/
  types/
  main.ts

scripts/
evidence/
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecución

La demostración principal del proyecto se encuentra en `src/main.ts`.

Compilación:
```bash
npm run build
```

Ejecución:
```bash
npm start
```

## Pruebas

Suite positiva:
```bash
npm test
```

Suite negativa:
```bash
npm run test:negative
```

La suite negativa forma parte de la evidencia del entregable: contiene validaciones que deben fallar cuando la implementación correcta detecta comportamientos incompatibles con los requisitos.

## Validación

La validación del entregable quedó registrada con:
- compilación del proyecto,
- ejecución de pruebas positivas,
- ejecución de pruebas negativas,
- ejecución del ejemplo principal.

El detalle consolidado de cumplimiento y evidencia se encuentra en `SUBMISSION.md`.

## Alcance implementado

- Creación desacoplada de mensajes mediante Factory Method.
- Creación desacoplada de notificadores por plataforma mediante Abstract Factory.
- Integración opcional entre ambos patrones en la demostración principal.
- Cobertura de pruebas para comportamiento esperado y detección de comportamiento inválido.

