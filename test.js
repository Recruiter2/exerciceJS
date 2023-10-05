// copy & paste this array at the top of your Javascript file
const nounourses = [{
    colors: ["Tan", "Chocolate", "Black", "White"],
    _id: "5be9c8541c9d440000665243",
    name: "Norbert",
    price: 2900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Pale brown", "Dark brown", "White"],
    _id: "5beaa8bf1c9d440000a57d94",
    name: "Arnold",
    price: 3900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Brown"],
    _id: "5beaaa8f1c9d440000a57d95",
    name: "Lenny and Carl",
    price: 5900,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_3.jpg"
  },{
    colors: ["Brown", "Blue", "Pink"],
    _id: "5beaabe91c9d440000a57d96",
    name: "Gustav",
    price: 4500,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },{
    colors: ["Beige", "Tan", "Chocolate"],
    _id: "5beaacd41c9d440000a57d97",
    name: "Garfunkel",
    price: 5500,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_5.jpg"
}]

function afficherNomDesNounours(array) {
  for (const nounourse of nounourses ) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    console.log(nounourse.name);
  }

}
// utiliser une BOUCLE (for) !

/*afficherNomDesNounours(nounourses);
node test.js 
Norbert
Arnold
Lenny and Carl
Gustav
Garfunkel*/

function afficherPrixTotal(array) {
  var prix = 0;
  for (const nounourse of nounourses ) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    prix += nounourse.price/100;
  }
  console.log(prix);
}
/*afficherPrixTotal(nounourses);
node test.js 
22700
*/

function afficherMoitiePrix(array) {
  for (const nounourse of nounourses ) {
  console.log( nounourse.name + " à -50% est à " + nounourse.price/200 + "€") ;
  }
}
/*afficherMoitiePrix(nounourses);
node test.js 
Norbert à -50% est à 14.5€
Arnold à -50% est à 19.5€
Lenny and Carl à -50% est à 29.5€
Gustav à -50% est à 22.5€
Garfunkel à -50% est à 27.5€*/
// si tu peux, essaye aussi d'afficher celui à -20%
function afficherVingtPrix(array) {
  for (const nounourse of nounourses ) {
  console.log( nounourse.name + " à -20% est à " + (nounourse.price*0.8)/100 + "€") ;
  }
}
/* afficherVingtPrix(nounourses);
node test.js 
Norbert à -20% est à 23.2€
Arnold à -20% est à 31.2€
Lenny and Carl à -20% est à 47.2€
Gustav à -20% est à 36€
Garfunkel à -20% est à 44€ */

function afficherColorisDisponibles(array) {
  for (const nounourse of nounourses ) {
    console.log(nounourse.name + " est disponible en " + nounourse.colors.length + " couleurs") ;
    }
}
/* afficherColorisDisponibles(nounourses);
node test.js 
Norbert est disponible en 4 couleurs
Arnold est disponible en 3 couleurs
Lenny and Carl est disponible en 1 couleurs
Gustav est disponible en 3 couleurs
Garfunkel est disponible en 3 couleurs */

function afficherSuperieurTrente(array) {
  for (const nounourse of nounourses ) {
    if (nounourse.price/100 > 30) {
      console.log(nounourse.name + " coûte + de 30€ il coute ( " + nounourse.price/100 +"€)")
    }
  }
}
/* afficherSuperieurTrente(nounourses);
node test.js 
Arnold coûte + de 30€ il coute ( 39€)
Lenny and Carl coûte + de 30€ il coute ( 59€)
Gustav coûte + de 30€ il coute ( 45€)
Garfunkel coûte + de 30€ il coute ( 55€) */
// essayer une VARIANTE en affichant "abordable" si le prix est en dessous
function afficherAbordable(array) {
  for (const nounourse of nounourses ) {
    if (nounourse.price/100 < 30) {
      console.log(nounourse.name + " coûte + de moins 30€ il coute ( " + nounourse.price/100 +"€)")
    }
  }
}
/* afficherAbordable(nounourses);
node test.js 
Norbert coûte + de moins 30€ il coute ( 29€) */
function afficherSommeDescriptions(array) {
  var SOMME = "";
  for (const nounourse of nounourses ) {
    // Ceci sera exécuté 5 fois
    // À chaque éxécution, la variable "pas" augmentera de 1
    // Lorsque'elle sera arrivée à 5, le boucle se terminera.
    SOMME += nounourse.description + " ";
  }
  console.log(SOMME);
}
/*afficherSommeDescriptions(nounourses);
node test.js 
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. */
// Attention, c'est bien la SOMME des descriptions qu'il faut afficher, pas les unes après les autres

 function afficherTroisiemeCouleurDispo(array) {
  for (const nounourse of nounourses ) {
    var color = "";
/*     console.log(nounourse.colors.length >= 2);
 */     if (nounourse.colors.length >= 2) {
      console.log(nounourse.colors[2]);
    } 
  }
} 
/* afficherTroisiemeCouleurDispo(nounourses);
node test.js 
Black
White
Pink
Chocolate */
 
/* console.log(nounourses[0].colors[2]);
 */// Attention: gérer les cas où aucune troisième couleur n'existe

function addTenToAge(age) {}
// should increase age passed as argument by 10.
// Ex:
let ageJulie = 12
let agePaul = 24
console.log(addTenToAge(ageJulie)) // should display 22
console.log(addTenToAge(agePaul)) // should display 34
// Help: use the note "What's an argument ?" to really get how arguments work
