# Gemotheque (GemLab)

![License MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Platform](https://img.shields.io/badge/Platform-Google%20Apps%20Script-green)
![Runtime](https://img.shields.io/badge/Google%20Apps%20Script-V8-green)
![Author](https://img.shields.io/badge/Auteur-Fabrice%20Faucheux-orange)

**La bibliothèque communautaire d'assistants Gemini personnalisés.**

GemLab est une interface web fluide et réactive permettant de référencer, rechercher et partager des "Gems" (prompts optimisés pour Google Gemini). Ce projet est conçu pour aider les développeurs et utilisateurs à maximiser leur productivité grâce à l'IA.

---

## 🚀 Fonctionnalités Clés

* **Annuaire Centralisé** : Visualisation claire des Gems sous forme de cartes avec icônes et descriptions.
* **Moteur de Recherche Instantané** : Filtrage en temps réel par mots-clés (titre ou description) et par catégories (Productivité, Développement, etc.).
* **Fiches Détaillées** : Vue approfondie pour chaque Gem incluant la description complète, l'auteur et le prompt prêt à l'emploi.
* **Proposition Simplifiée** : Formulaire dédié pour soumettre de nouveaux Gems via un mécanisme `mailto` automatique.
* **Design Responsive** : Interface moderne et adaptative (Mobile/Desktop) utilisant des variables CSS natives.

---

## 📂 Architecture du Projet

Le projet est structuré autour de fichiers statiques légers, facilement portables dans un projet Google Apps Script (fichier HTML) ou hébergeables sur n'importe quel serveur web.

* `index.html` : La page d'accueil contenant la grille de Gems et les filtres.
* `fiche-gem.html` : Le template dynamique pour l'affichage du détail d'un Gem.
* `ajouter.html` : Le formulaire de proposition de nouveau prompt.
* `data.js` : La base de données locale (objet JSON) contenant les définitions des Gems.
* `style.css` : La feuille de style globale (Thème clair, variables CSS, Flexbox/Grid).

---

## 🛠️ Installation et Utilisation

### 1. Installation Manuelle
1.  Téléchargez ou clonez le dépôt contenant les fichiers sources.
2.  Assurez-vous que tous les fichiers (`.html`, `.css`, `.js`) sont dans le même répertoire.

### 2. Lancement
Double-cliquez simplement sur le fichier `index.html` pour lancer l'application dans votre navigateur par défaut. Aucune compilation ni serveur local n'est nécessaire.

### 3. Ajouter un Gem (Données)
Pour enrichir l'annuaire manuellement, éditez le fichier `data.js` et ajoutez une entrée dans l'objet `gemsData` :

```javascript
"mon-nouveau-gem": {
    title: "Titre du Gem",
    icon: "🤖",
    category: "Productivité",
    desc: "Description courte.",
    fullDesc: "Explication détaillée...",
    prompt: "Votre prompt ici...",
    author: "Votre Nom"
}
