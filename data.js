const gemsData = {
    "diag-panne-machine": {
        "title": "Assistant Panne Machine",
        "icon": "🔧",
        "category": "Maintenance",
        "desc": "Aide au diagnostic rapide sur ligne de production.",
        "fullDesc": "Pour les techniciens de maintenance. Décrivez le symptôme (bruit, arrêt capteur, voyant rouge), il suggère les causes probables et les vérifications de sécurité à faire avant intervention.",
        "prompt": "Je suis technicien maintenance chez Cooperl. La ligne d'étiquetage des barquettes s'arrête toutes les 10 minutes avec un code erreur 'E45'. Liste les 3 causes mécaniques ou électriques les plus probables et la procédure de test.",
        "author": "Service Technique",
        "url": "https://gemini.google.com/app"
    },
    "rapport-intervention": {
        "title": "Rapport d'Intervention",
        "icon": "📝",
        "category": "Maintenance",
        "desc": "Transforme des notes vrac en rapport GMAO propre.",
        "fullDesc": "Dictez ou écrivez en vrac ce que vous avez fait (changé roulement, graissage...). Il reformate tout pour le logiciel de maintenance.",
        "prompt": "J'ai réparé la conditionneuse. Notes : 'Changement courroie HS, nettoyage capteur optique encrassé, test redémarrage OK'. Fais-moi un rapport technique structuré (Problème / Action / Résultat) pour l'historique machine.",
        "author": "Atelier Méca",
        "url": "https://gemini.google.com/app"
    },
    "audit-ifs-food": {
        "title": "Assistant Audit IFS/BRC",
        "icon": "✅",
        "category": "Qualité",
        "desc": "Prépare les checklists pour les audits de certification.",
        "fullDesc": "Indispensable pour les responsables Qualité Usine. Aide à vérifier point par point les exigences des normes (traçabilité, nettoyage, nuisibles).",
        "prompt": "Nous avons un audit IFS Food la semaine prochaine. Prépare-moi une grille d'audit à blanc pour vérifier la zone 'Réception Matières Premières' (points critiques : température, propreté camions, contrôle documentaire).",
        "author": "Direction Qualité",
        "url": "https://gemini.google.com/app"
    },
    "non-conformite-courrier": {
        "title": "Réponse Réclamation Client",
        "icon": "🛡️",
        "category": "Qualité",
        "desc": "Rédige une réponse technique et diplomate.",
        "fullDesc": "Pour répondre à une réclamation client (GMS ou Export) suite à un défaut produit. Structure la réponse : Analyse cause racine, Actions correctives, Geste commercial.",
        "prompt": "Un client GMS signale un défaut de sous-vide sur un lot de jambon. Rédige un mail de réponse expliquant que l'analyse a montré un micro-défaut de soudure, que la machine a été recalibrée et que le lot est bloqué. Ton rassurant et professionnel.",
        "author": "Service Consommateurs",
        "url": "https://gemini.google.com/app"
    },
    "onboarding-cooperl": {
        "title": "Kit Bienvenue Nouveau",
        "icon": "👋",
        "category": "RH",
        "desc": "Génère le planning d'intégration d'un nouvel arrivant.",
        "fullDesc": "Crée un parcours d'accueil sur 3 jours : visite usine/siège, remise EPI, formation sécurité, rencontre équipe, configuration outils Google.",
        "prompt": "Prépare un planning d'intégration sur 2 jours pour un nouvel assistant administration des ventes qui arrive lundi à Lamballe. Inclus la remise du badge, la visite des bureaux, la formation Google Workspace et un déjeuner d'équipe.",
        "author": "Équipe RH",
        "url": "https://gemini.google.com/app"
    },
    "fiche-poste-recrutement": {
        "title": "Rédacteur Fiche de Poste",
        "icon": "📄",
        "category": "RH",
        "desc": "Crée des offres d'emploi attractives.",
        "fullDesc": "Pour les managers qui recrutent. Transforme une liste de missions en une annonce structurée qui met en avant les valeurs de la coopérative.",
        "prompt": "Rédige une offre d'emploi pour un 'Conducteur de Ligne' à l'usine. Missions : pilotage machine, contrôle qualité, management 2 opérateurs. Avantages : prime équipe, participation. Ton dynamique.",
        "author": "Recrutement",
        "url": "https://gemini.google.com/app"
    },
    "synthese-reunion": {
        "title": "Synthèse Réunion Meet",
        "icon": "📝",
        "category": "Productivité",
        "desc": "Génère un compte-rendu structuré.",
        "fullDesc": "Collez la transcription de Google Meet, il sort les décisions et les actions (Qui/Quoi/Quand).",
        "prompt": "Fais-moi un compte-rendu structuré de cette réunion avec : 1. Décisions 2. Actions à faire. [COLLER TEXTE]",
        "author": "Support",
        "url": "https://gemini.google.com/app"
    },
    "formule-sheets-expert": {
        "title": "Expert Google Sheets",
        "icon": "📊",
        "category": "Productivité",
        "desc": "Crée des formules complexes pour vos tableaux.",
        "fullDesc": "Demandez-lui une formule pour croiser des données d'élevage, calculer des rendements ou trier des listes.",
        "prompt": "Donne-moi une formule pour faire la somme de la colonne B si la colonne A contient le mot 'Porc' et la colonne C est supérieure à 100.",
        "author": "Contrôle de Gestion",
        "url": "https://gemini.google.com/app"
    },
    "post-linkedin-marque": {
        "title": "Rédacteur Brocéliande",
        "icon": "📱",
        "category": "Rédaction",
        "desc": "Crée des posts LinkedIn engageants.",
        "fullDesc": "Génère des posts pour promouvoir nos produits 'Bien Élevés' ou 'Sans Antibiotique' avec les bons hashtags.",
        "prompt": "Rédige un post LinkedIn pour le lancement du nouveau jambon sans nitrite. Insiste sur le travail des éleveurs.",
        "author": "Marketing",
        "url": "https://gemini.google.com/app"
    },
    "apps-script-automator": {
        "title": "Génie Apps Script",
        "icon": "🤖",
        "category": "Développement",
        "desc": "Automatise vos tâches Google Workspace.",
        "fullDesc": "Génère le code pour créer des scripts (ex: sauvegarde automatique de pièces jointes Drive).",
        "prompt": "Écris un script pour enregistrer automatiquement les pièces jointes des emails 'Facture' dans Drive.",
        "author": "DSI",
        "url": "https://gemini.google.com/app"
    }
};
