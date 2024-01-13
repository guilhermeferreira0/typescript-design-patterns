import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-houser-app';
import { SmartHouseLight } from './smart-houser-light';

// Receiver
const bedroomLight = new SmartHouseLight('Luz Quarto');
const bethroomLight = new SmartHouseLight('bethroomLight');

// Command
const lightPowerCommand = new LightPowerCommand(bedroomLight);
const bethroomLightCommand = new LightPowerCommand(bethroomLight);
const bethroomIntensityCommand = new LightIntensityCommand(bethroomLight);

// Controle - invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommand);
smartHouseApp.addCommand('btn-2', bethroomLightCommand);
smartHouseApp.addCommand('btn-3', bethroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

for (let i = 0; i < 5; i++) {
  smartHouseApp.undoCommand('btn-3');
}

for (let i = 0; i < 3; i++) {
  smartHouseApp.executeCommand('btn-3');
}
