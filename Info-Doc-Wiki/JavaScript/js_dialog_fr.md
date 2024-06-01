# JavaScript : js_dialog
## Appel du module Dialog :
```js
let dialog = require("dialog");
```
bla bla bla

## Methods :
### message
Affiche un simple message avec un entête, du texte et un bouton "OK".

#### Paramètres
- Texte d'entête
- Texte de dialogue  

#### Retourne
true si le bouton central à été pressé et false si c'est le boutton retour. 

##### Exemples:
```js
dialog.message("Dialogue test", "Pressez OK !");
```

---
### custom
Dialogue plus complex avec des boutons configurables.

#### Paramètres
Configurez l'objet avec les champs suivants :
- header: texte de l'entête
- text: texte de dialogue
- button_left: nom du bouton de gauche (optionnel)
- button_right: nom du bouton de droite (optionnel)
- button_center: nom du bouton de centre (optionnel)

#### Retourne
Name of pressed button or empty string if the dialog was closed by back key press
Nom du bouton pressé ou une chaîne de caratère vide si le dialogue est fermé avec la touche retour.

##### Examples:
```js
let dialog_params = ({
    header: "Entête de dialogue",
    text: "Texte de dialogue",
    button_left: "Gauche",
    button_right: "Droite",
    button_center: "OK"
});

dialog.custom(dialog_params);
```
