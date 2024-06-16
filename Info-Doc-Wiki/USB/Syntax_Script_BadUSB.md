# Format fichier BadUSB 
BadUSB utilise une version améliorée de la syntaxe Duckyscript.<br>
Elle est compatible avec les commandes classiques de RubberDucky 1.0 et ajoute des commandes et fonctionnalités supplémentaires.

## Quelques règles
- Ne peux exécuter seulement des scripts depuis des fichiers .txt
- Aucune compilation requise.
- \n et \r\n sont supporté en fin de ligne.
- Les lignes vides sont acceptées. 
- les espaces et tab peuvent être utilisé pour l'indentation.


## Commandes
### Ligne de commentaire
L'interpréteur ignore tout texte après la commande REM
| Commande |	Paramètres      | Notes          |
| :------ |:---------------:| --------------:|
| REM 	  | Texte    |                |	


### Delay
Met en pause le script en fonction du temps défini.
| Commande            | Paramètres         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| DELAY  	           | Délais en ms |	Délais simple                         |
| DEFAULT_DELAY 	   | Délais en ms | Ajoute le délai à toute vos prochaines commandes. |
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
| BREAK 	           | Touche Pause/Break |
| PAUSE 	           | Touche Pause/Break  |
| SPACE 	           |                  |
| TAB 	             |                  |
| MENU 	             |Touche menu contextuel |
| APP 	             | Même que MENU     |
| Fx                 | Touches F1-F12      |

### Touche de modification
Peuvent être combinés à des touche spéciales ou des caractères simples
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
  
### Délais entre chaque appui
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| STRING_DELAY         | Délais en ms | Ajoute un délai à la prochaine commande STRING |
| STRINGDELAY          | Délais en ms | Même que STRING_DELAY |
| DEFAULT_STRING_DELAY | Délais en ms | Ajoute un délai à toute les commandes STRING |
| DEFAULTSTRINGDELAY   | Délais en ms | Même que : DEFAULT_STRING_DELAY |

### Répétition
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| REPEAT | Nombre | Nombre de répétition de la commande précédente |

### ALT+Pad Numérique
Sur certains OS vous pouvez entrer des caractères spéciaux en maintenant "ALT" et en tappant un nombre au pad numérique. 
| Commande            | Paramètres         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| ALTCHAR   | numéro du caractère | Affiche le caractère spécial. |
| ALTSTRING | Texte | Affiche du texte en utilisant la méthode ALT+NumPad. |
| ALTCODE   | Texte | Même que : ALTSTRING |

### Commande SysRq
| Commande            | Paramètres        | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| SYSRQ | Touche |  | 	

### Commandes Media
Certaines commandes Media peuvent être utilisée avec la commande MEDIA.
| Command            | Paramètres         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| MEDIA |	Clé | voir la liste ci-dessous | 	

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
| SNAPSHOT |	Prendre une photo (besoin d'un périphérique camera.)
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
| BRIGHT_UP |	Augmente la luminosité
| BRIGHT_DOWN |	Baisse la luminosité

## Wait
Attend indéfiniment qu'une touche soit pressée
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| WAIT_FOR_BUTTON_PRESS |	Aucun | Attend qu'une touche soit pressée pour continuer le script. | 
USB device ID

Vous pouvez saisir l'ID d'un USB HID. Cette commande devra être la première ligne de votre script.
| Commande            | Paramètre         | Notes                                |
| :----------------- |:------------------:| ------------------------------------:|
| ID | VID:PID Manufacturer:Product |  | 	
Exemple: ID 1234:abcd Samsung:Galaxy_s3

Le VID et PID sont des code hexadécimales et sont obligatoire. Le fabricant et le produit sont optionnels.
