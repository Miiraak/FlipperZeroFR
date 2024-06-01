# JavaScript : BadUSB
## Appel du module BadUSB :
```js
let badusb = require("badusb");
``` 

Permet de charger le module BadUSB du flipper Zero. <br>
Change le fonctionnement du flipper qui passe en mode clavier.

## Méthodes :
### setup
Vous devez appeler votre module avant toute autre méthode.<br>
Elle se compose de plusieurs paramètres.

#### Paramètres (optionnels)
Configuration de l'objet :
- vid (nombre)
- pid (nombre)
- mfr_name (string): Nom du farbicant (Maximum 32 caractères ASCII)
- prod_name (string): Nom du produit (Maximum 32 caractères ASCII)

##### Exemples:
```js
// Démarre le module BadUSB avec les paramètres par défaut. 
badusb.setup();
// Démarre le module BadUSB avec des valeures customisée pour vid et pid.
badusb.setup({ vid: 0xAAAA, pid: 0xBBBB }); 
// Démarre le module BadUSB avec des valeures customisée pour vid, pid, le farbicant et le produit.
badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper Devices", prod_name: "Flipper Zero" });
```
---

### isConnected
Renvoie l'état de la connexion USB.

##### Example:
```js
if (badusb.isConnected()) {
    // Code...
} else {
    // Afffiche une erreur.
}
```

---
### press
Press and release a key.
Appuie sur une touche.

#### Paramètres
Touche, Nom, ID de la touche.

Liste des possibilités ci-dessous.

##### Exemples:
```js
badusb.press("a"); // Presse la touche "a"
badusb.press("A"); // SHIFT + "a"
badusb.press("CTRL", "a"); // CTRL + "a"
badusb.press("CTRL", "SHIFT", "ESC"); //Combo :  CTRL + SHIFT + ESC
badusb.press(98); // Presse la touche dont l'ID décimal est : 98
badusb.press(0x47); // Presse la touche dont l'ID hexadécimale est : 0x41
```

---
### hold
Maintient une touche.<br>
Peux maintenir jusqu'a 5 touches simultanément. (modificateurs exclus).

#### Paramètres
Les mêmes que `press`

##### Exemples:
```js
badusb.hold("a"); // Appuie et maintient la touche "a"
badusb.hold("CTRL", "v"); // Appuie et maintient CTRL + "v" 
```

---
### release
Relâche une touche précédemment maintenue.

#### Paramètres
Les mêmes que `press`

Relâche toute les touche si appelée sans paramètres.

##### Exemples:
```js
badusb.release(); // Relâche toutes les touches
badusb.release("a"); // Relâche la touche "a"
```

---
### print
Entre une chaîne de caratères.

#### Paramètres
- Une chaîne de caratères
- Délais entre chaque touche (optionnel)

##### Exemples:
```js
badusb.print("Hello, world!"); // Entre "Hello, world!"
badusb.print("Hello, world!", 100); // Ajoute 100ms de délais entre chaque appuie de touche
```

---
### println
Les mêmes que `print` mais termine l'entrée avec un appuie sur la touche "ENTER".

#### Paramètres
- Une chaîe de caratères.
- Délais entre chaque touche (optionnel)

##### Exemples:
```js
badusb.println("Hello, world!");  // Entre "Hello, world!" et presse "ENTER"
```

---
## Liste des nom de touche.

### Touches de modification

| Nom           |
| ------------- |
| `CTRL`        |            
| `SHIFT`       |  
| `ALT`         |
| `GUI`         |  

### Touches spéciales

| Nom                | Notes                    |
| ------------------ | ------------------------ |
| `DOWN`             | Flèche du Bas            |
| `LEFT`             | Flèche de Gauche         |
| `RIGHT`            | Flèche de Droite         |
| `UP`               | Flèche du Haut           |
| `ENTER`            |                          |
| `DELETE`           |                          |
| `BACKSPACE`        |                          |
| `END`              |                          |
| `HOME`             |                          |
| `ESC`              |                          |
| `INSERT`           |                          |
| `PAGEUP`           |                          |
| `PAGEDOWN`         |                          |
| `CAPSLOCK`         |                          |
| `NUMLOCK`          |                          |
| `SCROLLLOCK`       |                          |
| `PRINTSCREEN`      |                          |
| `PAUSE`            | Touche Pause/Break       |
| `SPACE`            |                          |
| `TAB`              |                          |
| `MENU`             | Touche menu contextuel   |
| `Fx`               | Touche fonction F1 à F12 |
