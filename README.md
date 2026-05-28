# Gemotheque (GemLab)


[🇫🇷 Version Française](#-version-française) | [🇬🇧 English Version](#-english-version)

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

## 🇫🇷 Version Française


**La bibliothèque communautaire d'assistants Gemini personnalisés.**

GemLab est une interface web fluide et réactive permettant de référencer, rechercher et partager des "Gems" (prompts optimisés pour Google Gemini). Ce projet est conçu pour aider les développeurs et utilisateurs à maximiser leur productivité grâce à l'IA.

---

## 🚀 Fonctionnalités Clés

* **Annuaire Centralisé** : Visualisation claire des Gems sous forme de cartes avec icônes et descriptions.
* **Moteur de Recherche Instantané** : Filtrage en temps réel par mots-clés (titre ou description) et par catégories (Productivité, Développement, etc.).
* **Gestion via Google Sheets** : Génération automatique du fichier de configuration via un script Apps Script intégré.
* **Proposition Simplifiée** : Formulaire dédié pour soumettre de nouveaux Gems via un mécanisme `mailto` automatique.
* **Design Responsive** : Interface moderne et adaptative (Mobile/Desktop) utilisant des variables CSS natives.

---

## 📂 Architecture du Projet

Le projet est structuré autour de fichiers statiques légers et d'un générateur de données.

* `index.html` : La page d'accueil contenant la grille de Gems et les filtres.
* `fiche-gem.html` : Le template dynamique pour l'affichage du détail d'un Gem.
* `ajouter.html` : Le formulaire de proposition de nouveau prompt.
* `data.js` : La base de données locale (objet JSON) générée par le script Google Sheets.
* `style.css` : La feuille de style globale (Thème clair, variables CSS, Flexbox/Grid).
* `Code.gs` : Le script Google Apps Script (côté serveur) pour exporter les données du Sheet.

---

## 🛠️ Installation et Utilisation

### 1. Installation de l'Interface Web
1.  Téléchargez ou clonez le dépôt.
2.  Assurez-vous que tous les fichiers (`.html`, `.css`, `.js`) sont dans le même répertoire.
3.  Double-cliquez sur `index.html` pour lancer l'application localement.

### 2. Configuration du Google Sheet (Back-office)
Pour gérer les données facilement sans éditer le code à la main, nous utilisons un Google Sheet couplé à Apps Script.

#### Structure de l'onglet "Gems"
Créez un onglet nommé exactement **`Gems`** avec les colonnes suivantes (ordre important) :
1.  **ID** (Col A) : Identifiant unique (ex: `mon-gem-1`).
2.  **Titre** (Col B) : Nom du Gem.
3.  **Icône** (Col C) : Emoji (ex: 🚀).
4.  **Catégorie** (Col D) : (Productivité, RH, Qualité, etc.).
5.  **Description courte** (Col E) : Pour la carte d'accueil.
6.  **Description complète** (Col F) : Pour la fiche détail.
7.  **Prompt** (Col G) : Le texte du prompt.
8.  **Auteur** (Col H) : Votre nom ou service.
9.  **URL** (Col I) : Lien vers Gemini (`https://gemini.google.com/app`).

#### Installation du Script
1.  Dans votre Google Sheet, allez dans **Extensions** > **Apps Script**.
2.  Copiez le contenu du fichier `Code.gs` fourni dans ce dépôt.
3.  Sauvegardez le projet.
4.  Rechargez votre page Google Sheet (F5). Un menu **💎 GemLab** apparaîtra après quelques secondes.

### 3. Mise à jour des données
1.  Remplissez votre tableau Google Sheet.
2.  Cliquez sur le menu **💎 GemLab** > **Générer le code data.js**.
3.  Une fenêtre s'ouvre avec le code généré.
4.  Copiez ce code et remplacez tout le contenu du fichier `data.js` de votre dossier web.

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.


---
## 🇬🇧 English Version

> English translation coming soon.

---
<p align="center"><a href="https://faucheux.bzh" target="_blank" style="color: inherit; text-decoration: none;">&lt;&gt; par Fabrice Faucheux</a></p>