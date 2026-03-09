import { Notifier } from "../notifiers/Notifier";
import { MessageFactory } from "./MessageFactory";

export interface PlatformFactory {
  createNotifier(messageFactory?: MessageFactory): Notifier;
}
