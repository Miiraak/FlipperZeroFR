# JavaScript : js_serial
## Appel du module Serial :
```js
let serial = require("serial");
```

bla bla bla 

## Méthodes

### setup
Configure serial port. Should be called before all other methods.

#### Paramètres
- Nom du port série (usart, lpuart)
- Baudrate

##### Exemples:
```js
// Configure le port LPUART avec un baudrate de 115200
serial.setup("lpuart", 115200);
```

---
### write
Ecris des donnée vers un port série

#### Paramètres
Au minimum un argument des types suivants :
- Une chaîne de caratères
- Un nombre simple, chaque nombre est interprété comme un byte
- Array de nombres, chaque nombre est interprété comme un byte
- ArrayBuffer ou DataView

##### Exemples:
```js
serial.write(0x0a); // Ecris un byte simple 0x0A
serial.write("Hello, world!"); // Ecris une chaîne de caractère
serial.write("Hello, world!", [0x0d, 0x0a]); // Une chaîne suivie de deux bytes
```

---
### read
Lis un nombre de caratères défini pour un port série défini.

#### Paramètres
- Nombre de bytes à lire 
- Compteur en ms (optionnel)

#### Retours
Une chaîne de caractère ou non-défini si rien n'a été intercepté avant le timeout.

##### Exemples:
```js
serial.read(1); // Lis un byte sans timeout
serial.read(10, 5000); // Lis 10 bytes, avec 5 secondes de timeout
```

---
### readln
Lis sur un port série défini jusqu'à un caractère de fin de ligne.

#### Paramètres
- Compteur en ms (optionnel)

#### Retours
Une chaîne de caractère ou non-défini si rien n'a été intercepté avant le timeout.

##### Examples:
```js
serial.readln(); // Lis sans timout
serial.readln(5000); // Lis avec 5 secondes de timeout
```

---
### readBytes
Lis sur un port série défini jusqu'à un caractère de fin de ligne.

#### Paramètres
- Nombres de bytes à lire
- Compteur en ms (optionnel)

#### Retours
Un ArrayBuffer avec les données reçues ou non-défini si rien n'a été lu avant la fin du timeout.

##### Exemples:
```js
serial.readBytes(4); // Lis 4 bytes sans timeout

// Lis un byte du buffer reçu sans timeout, retourn UNDEFINED si le buffer est vide
serial.readBytes(1, 0);
```

---
### expect
Recherche un pattern de caratère dans le flux de donnée reçu.

#### Paramètres
- Un argument ou Array d'un des type suivant :
    - Une chaîne de caratères
    - Chaîne de nombre, chaque nombre est interprété comme un byte
- Compteur en ms (optionnel)

#### Retours
Index des pattern trouvés dans la liste des patterns fournit. UNDEFINED is rien n'est trouvé.

##### Exemples:
```js
// Attend sur le root shell # avec 1 seconde de timeout, retourne 0 si reçu avant le timeout, UNDEFINED si rien n'est trouvé
serial.expect("# ", 1000); 

// Attend indéfiniment d'intercepter l'une des deux chaîne de caractère, retourne 0 si la première est trouvée ou 1 si c'est la seconde.
serial.expect([": not found", "Usage: "]);
```