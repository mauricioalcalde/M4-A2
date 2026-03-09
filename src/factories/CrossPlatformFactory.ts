import { Notifier } from "../notifiers/Notifier";
import { MessageFactory } from "./MessageFactory";

/**
 * Abstract Factory: crea productos relacionados para una plataforma.
 * Para esta actividad, el único producto requerido es Notifier.
 */
export interface CrossPlatformFactory {
  createNotifier(messageFactory?: MessageFactory): Notifier;
}
