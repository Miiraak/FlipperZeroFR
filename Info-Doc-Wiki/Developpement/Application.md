# Programmation d’applications – Flipper Zero

uFBT est un outil cross-platform pour developpement des applications pour Flipper Zero. C’est une version simplifiée de FBT (Flipper Build Tool).<br>
Il permet d’effecuter les tâches basiques comme la compilation, debugging, flash firmware…<br>
Il utilise des librairies et des binaries permettant de ne pas avoir a monter l’intégralité du firmware pour compiler et debugger des applications.<br>

## Installation :
    Linux & macOS		: python3 -m pip install --upgrade ufbt
    Windows	        	: py -m pip install --upgrade ufbt

**uFBT** utilise votre system python pour exécuter un code bootstrap. La version minimale supportée est la 3.8.<br>Lors de l’exécution des tâches, uFBT télécharge et utilise ses propres toolchains et binaries pour créer votre application.

Au premier lancement uFBT télécharge et installe les composants SDK depuis le release channel du firmware officiel.<br>
Pour plus d’informations lisez la partie « Gestion des SDK ».

## Utilisation : 
### Compilez et lancez votre application
Pour commencer créez un dossier pour votre application, et ouvrez le dans Visual Studio Code.<br>
uFBT peut créer des templates pour vos applications.<br>

Pour se faire ouvrez un terminal depuis VSCode. Tapez la commande « ufbt create APPID=<app_id> ».<br>
« App_id » correspond à l’identifiant de votre application (ex : mon_toaster).<br>
Il correspond generalement au nom de votre application.<br>
 **! Il doit cependant être unique !**<br>

A l’execution de la commande un manifest d’application, des fichiers sources et des dossiers seront créés.<br>

    [Nom_app]
        ├── application.fam (type: fichier texte, compulsory)
        ├── icon.png (type: image, optionnel)
        ├── README.md (type: fichier texte, optionnel)
        │
        ├── [images] (type: dossier, optionnel)
        │      └── {toutes les images requises par l'application}
        │
        ├── main.c (type: fichier texte, optionnel)
        └── {autres fichiers .c/.h utilisé par l'application}

- **application.fam** : Ce fichier contient les détail et options de votre application.<br>
- **icon.png** :<br>
- **README.md** :<br>
- **[Images]** : Ce dossier contiendra toutes vos images utilisées au sein de l’application.<br>
- **main.c** : Fichier principal, contient l’entry point de votre programme.<br>
- **Autres fichiers** :<br>

### Intégration VS Code
uFBT fourni une configuration pour VSCode qui permet de debug et compiler votre application depuis votre IDE.<br>

Pour le déployer vous pouvez lancer la commande « ufbt vscode_dist » depuis le terminal VSCode.<br>
Par la suite vous pouvez lancez/Compiler votre application depuis le menu Build (ctrl+shift+b), ou lancer le menu Debugging (ctrl+shift+d).<br>

### Commandes
•	« ufbt » : Compilation de l’application dans votre dossier root. Crée un dossier .dist pour stocker la sortie.<br>
•	« ufbt launch » : Requiere un flipper Zero connecté. Compile et envoie le fichier au Flipper.<br>

### Debugging
•	[ …in work… ]

### Other
•	[ …in work… ]

## Gestion du SDK :
Pour mettre à jour le SDK, lancez la commande « ufbt update ».<br>
Lance le téléchargement et l’installation de tous les composant requis depuis la précédente source utilisée.
•	[ …in work… ]

## Gestion du SDK globale et par projet :
•	[ …in work… ]

## ufbt-bootstrap :
La mise à jour du SDK est prise en charge par un composant de uFBT appelé bootstrap.<br>
Il possède un point d’entrée « ufbt-bootstrap ». Pour voir la liste complète des options additionnelles tapez la commande « ufbt-bootstrap –help ».  

## Troubleshooting :
Si quelque chose se passe mal et que uFBT se retrouve corrompue, vous pouvez le réinitialiser en lancant la commande « ufbt clean ». Si ceci ne marche pas, vous pouvez supprimer manuellement le sous-dossier .ufbt de votre dossier %USER%.
Toutes les commandes relatives à uFBT acceptent l’option –verbose vous permettant d’afficher des informations de debug supplémentaire.
