import { CrossPlatformFactory } from "./CrossPlatformFactory";
import { Notifier } from "../notifiers/Notifier";
import { DesktopNotifier } from "../notifiers/DesktopNotifier";
import { MessageFactory } from "./MessageFactory";

export class DesktopPlatformFactory implements CrossPlatformFactory {
  public createNotifier(messageFactory?: MessageFactory): Notifier {
    return new DesktopNotifier(messageFactory);
  }
}
