import { CrossPlatformFactory } from "./CrossPlatformFactory";
import { Notifier } from "../notifiers/Notifier";
import { WebNotifier } from "../notifiers/WebNotifier";
import { MessageFactory } from "./MessageFactory";

export class WebPlatformFactory implements CrossPlatformFactory {
  public createNotifier(messageFactory?: MessageFactory): Notifier {
    return new WebNotifier(messageFactory);
  }
}
