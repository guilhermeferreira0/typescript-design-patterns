import { Radio } from './device/radio';
import { Tv } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(abstration: RemoteControl | RemoteControlWithVolume): void {
  abstration.togglePower(); // true

  // Type Guard
  if (!('volumeUp' in abstration)) return;
  abstration.volumeUp(); // 20
  abstration.volumeUp(); // 30
  abstration.volumeDown(); // 20
}

const tv = new Tv();
const radio = new Radio();

const tvRemoteControl = new RemoteControlWithVolume(tv);
const radioRemoteControl = new RemoteControl(radio);

clientCode(tvRemoteControl);
clientCode(radioRemoteControl);
