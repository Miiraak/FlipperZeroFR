# js_notification {#js_notification}
## Appel du module Notify
```js
let notify = require("notification");
```

Vous permet d'afficher des messages de notifications sur le flipper. <br>
Comprenant les succès et erreurs ainsi que la gestion du clignotement de la led.

## Méthodes :
### success
Affiche le message de succès du Flipper Zero

##### Exemples:
```js
notify.success();
```

---
### error
Affiche le message d'erreur du Flipper Zero

##### Exemples:
```js
notify.error();
```

---
### blink
Notification/clignotement de la LED

#### Paramètres
- Couleur (bleu/rouge/vert/jaune/cyan/magenta)
- Type declignotement (court/long)

##### Exemples:
```js
notify.blink("red", "short"); // Court clignotement rouge
notify.blink("green", "short"); // Long clignotement vert
```