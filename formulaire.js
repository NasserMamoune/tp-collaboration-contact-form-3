// Saisir les valeurs des champs du formulaire de contact
const readlineSync = require('readline-sync');
const fullName = readlineSync.question("Entrez votre nom complet : ");
const email = readlineSync.question("Entrez votre adresse e-mail : ");
const subject = readlineSync.question("Entrez le sujet : ");
const message = readlineSync.question("Entrez votre message : ");

// Vérifier si tous les champs sont remplis
if (!fullName || !email || !subject || !message) {
    // Afficher un message d'alerte
    console.log("Veuillez remplir l'ensemble des champs");
} else {
    // Afficher les valeurs des champs dans la console du navigateur
    console.log("Full Name:", fullName);
    console.log("E-mail:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);
}