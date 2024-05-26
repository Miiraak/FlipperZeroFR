# Utilisation du module Sub-GHz
Avant de s’attaquer au module, petite piqure de rappel sur les fréquences Sub-GHz et leurs plages d’émission autorisée.

433.05-434.79 MHz et 868.15-868.55 MHz en dehors de ces fréquences l’émission est illégale en Europe ! 

Certaines sont utilisée pour du matériel spécifique comme le militaire ou médicale, vous pourriez vous retrouver dans des situations extrêmement délicates. Voir même de risquer la vie de personne dans certains cas.

Petite piqure de rappel fait ! Nous allons nous attaquer à la première partie de notre module.

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MainMenuGlobalGHz.png">
</p>

---

## Read :
Lorsque vous lancer votre module SubGHz vous arrivez sur différente options, la première READ vous permet de mettre le FlipperZero en mode écoute, il va dès lors scanner la fréquence définie à la recherche de signal recevable.

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHz.png">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/SubGHzRead.png">
</p>

-	Gauche : Options.

<p align="left">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/SubGHzReadOptions.png">
</p>

Options :
-  Frequency : Change la fréquence d’écoute.
-  Modulation : Change le protocole de modulation de l’onde.
  - FM = Modulation de la fréquence
  - AM = Modulation de l’amplitude.
- Hopping : Le flipper reste en mode écoute mais passe en fréquence en fréquence. 
- Bin RAW : Permet de capter et d’enregistrer des paquet RAW en mode READ.
- Repeater :  -
- Remove Duplicate :  -
- Delete old signal on Full Memory : Supprime automatiquement les enregistrements les plus vieux lorsque la mémoire est saturée.
- Autosave : Enregistre automatiquement les signaux détectés
- Ignore : Permet d’ignorer des protocoles spécifiques lors de l’écoute. 
- Sound : Active ou non un retour son (Essayez, c’est horrible…)
- Reset to default : Remet les options à zéro
- Lock Keyboard : Permet de bloquer les touches du flipper en mode.

---

## Read Raw :
Ici vous avec la possibilité d’enregistrer des fréquences dont les protocoles ou la provenance n’est pas connue par le flipper. Ce dernier va alors enregistrer l’intégralité des données reçue dans un fichier dit : brut (Raw).

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzRaw.png">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MainSubGHzReadRaw.png">
</p>

-	Centre : Enregistrement.
-	Gauche : Options

Options :

<p align="left">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzRawOptions.png">
</p>

-	Frequency : Change la fréquence d’écoute.
-	Modulation : Change le protocole de modulation de l’onde.
-	Sound : Active ou non un retour son (…encore…)
-	RSSI Threshold : Délimite le seul de tolérance du flipper.

---

## Saved :
Une fois vos fréquence lue et sauvegardées, vous avez la possibilité de les émettre via l’onglet SAVED, naviguez simplement jusqu’à votre fichier et pressez centre. 
Vous arriverez sur un menu d’émission. 

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzSaved.png">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzSavedSelection.png">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MainSubGHzSaved.png">
</p>

-	Droit : Décodage de l’enregistrement, Renommage et suppression.

<p align="left">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzSavedSelectionEmul.png">
</p>

-	Centre : Emet l’enregistrement.

<p align="left">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzSavedShowBit.png">
</p>

-	Gauche : Quitter.

---

## Add Manually :
Vous permet l’ajout de protocoles supplémentaires à votre module SubGHz.

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzAddManually.png">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzAddManualySelection.png">
</p>

---

## Frequency Analyzer :
Dans l’onglet Frequency Analyzer, votre flipper se met à écouter toute la plage de fréquence disponible. Il vous affichera les signaux les plus Puisant/Compréhensible dans les petit placeholder « ---.--- MHz ». 

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MainSubGHzFrequencyAnalyzer.png">
</p>

Vous avez la possibilité de changer la tolérance de votre flipper via le RSSI (Threshold) pour capter des signaux plus ou moins puissants en appuyant sur la flèche de gauche ou de droite.<br>
Une fois le signal capté et placé dans le placeholder, vous pouvez naviguer entre vos détections avec les boutons haut et bas.<br> Un clic au centre sur la fréquence vous ouvre en mode READ avec la fréquence analysée.

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MainSubGHzFrequencyAnalyzerRedirection.png">
</p>

---

## Radio Settings :

<p align="center">
  <img src="https://github.com/Miiraak/FlipperZeroFR/blob/main/.asset/Info-doc-wiki/SubGHz/MenuSubGHzRadioSettings.png">
</p>

-	Module : Sélectionne la puce GHz interne ou externe (si disponible)
-	GPS Baudrate :  -
-	Protocol Names :  -
-	Counter Incr. :  -
-	Debug Pin :  -

---
