import { CrossPlatformFactory } from "./CrossPlatformFactory";
import { Notifier } from "../notifiers/Notifier";
import { MobileNotifier } from "../notifiers/MobileNotifier";
import { MessageFactory } from "./MessageFactory";

export class MobilePlatformFactory implements CrossPlatformFactory {
  public createNotifier(messageFactory?: MessageFactory): Notifier {
    return new MobileNotifier(messageFactory);
  }
}
