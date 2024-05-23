# Format fichier BadUSB 
BadUBB utillise une version améliorée de la syntax Duckyscript.<br>
Elle est compatible avec les commandes classique de RubberDucky 1.0 et ajoute des commandes et fonctionnalités supplémentaires.

## Quelque règles
- Ne peux executer seulement des scripts depuis des fichier .txt
- Aucune compilation requise.
- \n et \r\n sont supporté en fin de ligne.
- Les lignes vides sont acceptées. 
- les espaces et tab peuvent être utilisé pour l'indentation.


## Commandes
### Ligne de commentaire
L'interpeteur ignore tout texte après la commande REM
| Commande |	Paramètres      | Notes          |
| :------ |:---------------:| --------------:|
| REM 	  | Text    |                |	


### Delay
Pause script execution by a defined time.
Met en pause le script en fonction du temps défini.
| Commande            | Paramètres         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| DELAY  	           | Délais en ms |	Délais simple                         |
| DEFAULT_DELAY 	   | Délais en ms | Ajoute le délais à toute vos prochaine commandes. |
| DEFAULTDELAY 	     | Délais en ms | Similaire à DEFAULT_DELAY                |

### Touche clavier
| Commande            | Notes            |
| :----------------- | ----------------:| 
| DOWNARROW / DOWN 	 |                  |  
| LEFTARROW / LEFT 	 |                  | 
| RIGHTARROW / RIGHT |                  |   
| UPARROW / UP 	     |                  |  
| ENTER 	           |                  |
| DELETE 	           |                  |   
| BACKSPACE 	       |                  |    
| END 	             |                  |   
| HOME 	             |                  |   
| ESCAPE / ESC 	     |                  |   
| INSERT 	           |                  |   
| PAGEUP 	           |                  |   
| PAGEDOWN 	         |                  |     
| CAPSLOCK 	         |                  |   
| NUMLOCK 	         |                  |  
| SCROLLLOCK 	       |                  |  
| PRINTSCREEN 	     |                  |  
| BREAK 	           | Pause/Break key  |
| PAUSE 	           | Pause/Break key  |
| SPACE 	           |                  |
| TAB 	             |                  |
| MENU 	             | Context menu key |
| APP 	             | Same as MENU     |
| Fx                 | F1-F12 keys      |

### Touche de modification
Can be combined with a special key command or a single character.
| Commande        |	Notes         |
| :------------- | --------------:|
| CONTROL / CTRL |                |	   
| SHIFT 	       |                |  
| ALT            | 	              |  
| WINDOWS / GUI  |	              |  
| CTRL-ALT 	     | CTRL+ALT       |  
| CTRL-SHIFT 	   | CTRL+SHIFT     |  
| ALT-SHIFT 	   | ALT+SHIFT      | 
| ALT-GUI 	     | ALT+WIN        |  
| GUI-SHIFT 	   | WIN+SHIFT      |   
| GUI-CTRL 	     | WIN+CTRL       |   

### Appuis et relâchement de touche
Up to 5 keys can be hold simultaneously.
Jusqu'a 5 touche peuvent être pressée simultanément
| Commande            | Paramètre        | Notes                                |
| :----------------- |:--------------------------------:| ------------------------------------------:|
| HOLD 	             | Touche spéciale/clavier | Appuie et maintient la touche jusqu'à la commande RELEASE |
| RELEASE            | Touche spéciale/clavier | Relâche la touche |                               |

### String
| Commande            | Paramètre     | Notes                                      |
| :----------------- |:--------------:| ------------------------------------------:|
| STRING             | Texte    | Affiche/Ecrit le texte                          |
| STRINGLN 	         | Texte 	  | Affiche/Ecrit le texte puis presse ENTER |
  
### Délais entre chaque appuis
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| STRING_DELAY         | Délais en ms | Ajoute un délais à la prochaine commande STRING |
| STRINGDELAY          | Délais en ms | Même que STRING_DELAY |
| DEFAULT_STRING_DELAY | Délais en ms | Ajoute un délais à toute les commandes STRING |
| DEFAULTSTRINGDELAY   | Délais en ms | Même que : DEFAULT_STRING_DELAY |

### Répétition
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| REPEAT | Nombre | Nombre de répétition de la commande précédente |

### ALT+Pad Numérique
Sur certains OS vous pouvez entrer des caractères spéciaux en maintenant "ALT" et en tappant un nombre au pad numérique. 
| Commande            | Paramètres         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| ALTCHAR   | numero du caratère | Affiche le caratère spécial. |
| ALTSTRING | Texte | Affiche du texte en utilisant la méthode ALT+NumPad. |
| ALTCODE   | Texte | Même que : ALTSTRING |

### Commande SysRq
| Commande            | Paramètres        | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| SYSRQ | Touche |  | 	

### Commandes Media
Some Media/Consumer Control keys can be pressed with "MEDIA" command
Certaines commande Media peuvent être utilisée avec la commande MEDIA.
| Command            | Parameters         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| MEDIA |	Clé | voir la liste ci dessous | 	

| Clé | Effet |
|:----|------:|
| POWER | Allume | 	
| REBOOT |	Redémarre
| SLEEP |	Mettre en veille
| LOGOFF |	Se déconnecter
| EXIT 	| Quitter
| HOME 	| Menu 
| BACK 	| Retour
| FORWARD 	| Suivant
| REFRESH 	| Rafraîchir
| SNAPSHOT |	Prendre un photo (besoin d'un périphérique camera.)
| PLAY 	| Lancer
| PAUSE 	| Pause
| PLAY_PAUSE 	| 
| NEXT_TRACK |	Piste suivante
| PREV_TRACK 	| Piste précédente
| STOP 	| Stop
| EJECT 	| Ejecter
| MUTE 	| Muet
| VOLUME_UP |	Volume +
| VOLUME_DOWN 	| Volume -
| FN | Touche Fn/Globe sur clavier MAC
| BRIGHT_UP |	Augement la luminosité
| BRIGHT_DOWN |	Baisse la luminosité

## Wait
Will wait indefinitely for a button to be pressed
| Command            | Parameters         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
WAIT_FOR_BUTTON_PRESS 	None 	Will wait for the user to press a button to continue script execution
USB device ID

You can set the custom ID of the Flipper USB HID device. ID command should be in the first line of script, it is executed before script run.
| Command            | Parameters         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
ID 	VID:PID Manufacturer:Product 	

Example: ID 1234:abcd Flipper Devices:Flipper Zero

VID and PID are hex codes and are mandatory. Manufacturer and Product are text strings and are optional.
