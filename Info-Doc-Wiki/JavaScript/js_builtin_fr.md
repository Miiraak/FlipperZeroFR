# JavaScript : Built-in
## Appel du module Built-in :
```js
let serial = require("serial");
```

Charge le module serial qui vous permet d'afficher des log sur votre console.<br>
Vous permet d'inséré des délais entre les commandes.

## Méthodes :
### delay
#### Paramètres
- Valeur du délais en milisecondes.

##### Exemples:
```js
delay(500); // Délais de 500ms
```

---
### print
Affiche un message sur la console de commande.

#### Paramètres
Les arguments suivants sont supportés :
- Chaînes de caractères
- Nombres
- Booléenne
- non-définie

##### Examples:
```js
print("string1", "string2", 123);
```

---
### console.log

---
### console.warn

---
### console.error

---
### console.debug
Similare à `print` mais affiche seulement en sorte de la serial console avec le niveau de log correspondant. 

---
### to_string
Convertit un nombre en chaine de caractère.

##### Examples:
```js
to_string(123)
```

---
### to_hex_string
Convertit un nombre en chaîne de caratère hexadécimal.

##### Examples:
```js
to_hex_string(0xFF)
```
