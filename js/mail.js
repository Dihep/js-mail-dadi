// Chiedi all’utente la sua email per poi 
console.log("JS is here.");
const userMail = prompt("Inserisci la tua mail.");
const approvedList = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com", "mail4@gmail.com", "mail5@gmail.com"];
//controllare che sia nella lista di chi può accedere.
let approval = false;
for (i=0; (i<approvedList.length)&&(approval==false); i++) {
    if (userMail==approvedList[i]) {
        approval = true;
    };
};
// Stampa un messaggio SOLO SE l'utente è in lista.
if (approval==true) {
    console.log("Access confirmed.")
};