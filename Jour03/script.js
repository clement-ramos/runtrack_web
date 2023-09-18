// Fonction pour valider si une valeur est un nombre
function estNombre(valeur) {
    return !isNaN(parseFloat(valeur)) && isFinite(valeur);
  }
  
  // Fonction pour demander à l'utilisateur de saisir un nombre valide
  function saisirNombre(message) {
    let nombre;
    do {
      nombre = prompt(message);
    } while (!estNombre(nombre));
  
    return parseFloat(nombre);
  }
  
  // Fonction pour demander à l'utilisateur de saisir une chaîne non vide
  function saisirChaineNonVide(message) {
    let chaine;
    do {
      chaine = prompt(message);
    } while (chaine === null || chaine.trim() === "");
  
    return chaine;
  }
  
  // Demander à l'utilisateur de saisir deux nombres
  const premierNombre = saisirNombre("Entrez le premier nombre :");
  const deuxiemeNombre = saisirNombre("Entrez le deuxième nombre :");
  
  // Calculs
  const addition = premierNombre + deuxiemeNombre;
  const soustraction = premierNombre - deuxiemeNombre;
  const multiplication = premierNombre * deuxiemeNombre;
  const division = premierNombre / deuxiemeNombre;
  
  // Afficher les résultats
  console.log(`Résultats pour les nombres saisis :`);
  console.log(`Addition : ${addition}`);
  console.log(`Soustraction : ${soustraction}`);
  console.log(`Multiplication : ${multiplication}`);
  console.log(`Division : ${division}`);
  
  // Demander à l'utilisateur de saisir deux chaînes non vides
  const premiereChaine = saisirChaineNonVide("Entrez la première chaîne :");
  const deuxiemeChaine = saisirChaineNonVide("Entrez la deuxième chaîne :");
  
  // Concaténer et afficher les chaînes
  const chaineConcatenee = premiereChaine + " " + deuxiemeChaine;
  console.log(`Chaînes concaténées : ${chaineConcatenee}`);
  