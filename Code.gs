function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('💎 GemLab')
      .addItem('Générer le code data.js', 'genererDataJS')
      .addToUi();
}

function genererDataJS() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Gems');
  if (!sheet) {
    SpreadsheetApp.getUi().alert("Erreur : L'onglet doit s'appeler 'Gems'");
    return;
  }

  // Récupérer toutes les données (à partir de la ligne 2 pour ignorer les en-têtes)
  const data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 9).getValues();
  
  let gemsObject = {};

  data.forEach(row => {
    const id = row[0]; // Colonne A
    
    // Si l'ID est vide, on ignore la ligne
    if (id && id.toString().trim() !== "") {
      gemsObject[id] = {
        title: row[1],       // Colonne B
        icon: row[2],        // Colonne C
        category: row[3],    // Colonne D
        desc: row[4],        // Colonne E
        fullDesc: row[5],    // Colonne F
        prompt: row[6],      // Colonne G
        author: row[7],      // Colonne H
        url: row[8]          // Colonne I
      };
    }
  });

  // Conversion en chaîne JSON formatée
  const jsonString = JSON.stringify(gemsObject, null, 4);
  
  // On ajoute le préfixe pour en faire une variable JS valide
  const finalCode = `const gemsData = ${jsonString};`;

  // Afficher le résultat dans une fenêtre modale pour copier-coller
  afficherResultat(finalCode);
}

function afficherResultat(code) {
  const htmlContent = `
    <style>
      body { font-family: monospace; padding: 10px; }
      textarea { width: 100%; height: 350px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; }
      button { background: #4e8cff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-top: 10px;}
      button:hover { background: #3a75d6; }
    </style>
    <h3>Voici votre nouveau fichier data.js</h3>
    <p>Copiez ce code et remplacez tout le contenu de votre fichier <code>data.js</code> actuel.</p>
    <textarea id="codeArea">${code}</textarea>
    <br>
    <button onclick="copierCode()">Copier le code</button>
    <span id="msg" style="color:green; margin-left:10px; display:none;">Copié !</span>
    
    <script>
      function copierCode() {
        var copyText = document.getElementById("codeArea");
        copyText.select();
        document.execCommand("copy");
        document.getElementById("msg").style.display = "inline";
      }
    </script>
  `;

  const htmlOutput = HtmlService.createHtmlOutput(htmlContent)
      .setWidth(600)
      .setHeight(500);
  
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Générateur GemLab');
}
