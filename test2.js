// copy & paste this array at the top of your Javascript file
const nounourses = [{
    colors: ["Tan", "Chocolate", "Black", "White"],
    _id: "5be9c8541c9d440000665243",
    name: "Norbert",
    price: 2900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    colors: ["Pale brown", "Dark brown", "White"],
    _id: "5beaa8bf1c9d440000a57d94",
    name: "Arnold",
    price: 3900,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    colors: ["Brown"],
    _id: "5beaaa8f1c9d440000a57d95",
    name: "Lenny and Carl",
    price: 5900,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_3.jpg"
}, {
    colors: ["Brown", "Blue", "Pink"],
    _id: "5beaabe91c9d440000a57d96",
    name: "Gustav",
    price: 4500,
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_4.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
    colors: ["Beige", "Tan", "Chocolate"],
    _id: "5beaacd41c9d440000a57d97",
    name: "Garfunkel",
    price: 5500,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_5.jpg"
}]

function afficherNounoursNameParagraphe(nounours) {
    for (const nounourse of nounourses) {
        var element = document.createElement("p");
        element.innerHTML = nounourse.name;
        console.log(element);
        document.getElementById("main").appendChild(element);
    }
}
afficherNounoursNameParagraphe(nounourses);
// afficher les noms des nounours sous forme de paragraphes dans la page
/* 
node test2.js 
<p>Norbert</p>
<p>Arnold</p>
<p>Lenny and Carl</p>
<p>Gustav</p>
<p>Garfunkel</p> */

function afficherDivAvecNomEtPrixNounours(nounours) {
    for (const nounourse of nounourses) {
        var element = document.createElement("div");
        element.innerHTML = nounourse.name + " " + nounourse.price / 100 + "€";
        console.log(element);
        document.getElementById("main").appendChild(element);
        /*  console.log("<div>" +
             nounourse.name + " " + nounourse.price / 100 +
             "€</div>"); */
    }
}
afficherDivAvecNomEtPrixNounours(nounourses);
// pour chaque nounours, creer division et a l'interieur, ajoute nom + prix du nounours
/* 
node test2.js 
<div>Norbert 29€</div>
<div>Arnold 39€</div>
<div>Lenny and Carl 59€</div>
<div>Gustav 45€</div>
<div>Garfunkel 55€</div> */

function afficherPhotoDesNounours(nounours) {

    for (const nounourse of nounourses) {
        var element = document.createElement("img");
        // remplacer/modifier à la source de l'img
        element.src = nounourse.imageUrl;
        // inserer dans le html
        document.getElementById("main").appendChild(element);
    }

} // reussir a integrer les liens dans la attribut src de tag <img>
afficherPhotoDesNounours(nounourses);

function afficherLeToutSousFormeDeDivisions(nounours) {
    //on a un conteneur pour le produit
    var container = document.createElement("div");
    container.setAttribute("id", "produits");
    for (const nounourse of nounourses) {
        //chaque produit a un conteur produit qui contient son image nom prix etc
        var produit = document.createElement("div");
        //on a une image
        var picture = document.createElement("img");
        // remplacer/modifier à la source de l'img
        picture.src = nounourse.imageUrl;
        produit.appendChild(picture);

        //on a le titre et le prix
        var title = document.createElement("div");
        title.innerHTML = nounourse.name + " " + nounourse.price / 100 + "€";
        produit.appendChild(title);

        //on a le bouton
        var button = document.createElement("button");
        button.innerHTML = "voir produit ";
        produit.appendChild(button);
        /*  console.log("<div>" +
             nounourse.name + " " + nounourse.price / 100 +
             "€</div>"); */
        container.appendChild(produit);
    }
    document.getElementById("main").appendChild(container);
}
afficherLeToutSousFormeDeDivisions(nounourses);
// combiner tout et faire un apercu du produit (image, nom, prix + bouton "voir produit")

/* 5) reussir a faire la page de produit (il ne s'agit plus de faire un apercu des produits
 comme sur la page d'accueil, mais bien de remplir les informations sur un template de page HTML)
 */