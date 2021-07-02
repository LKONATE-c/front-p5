//creation de variable
let teddies =  localStorage.getItem("chooseProductsIncart");
let priceTotal =localStorage.getItem("totalCost");

//variable pour formulaires de contact

let formNom = document.getElementById("nom");
let formPrenom = document.getElementById("prenom");
let formMail =  document.getElementById("mail");
let formAdresse =  document.getElementById("adresse");
let formVille =  document.getElementById("ville");
let formCodePostal =  document.getElementById("code-postal");

//creation d'une requete pour récup les données


fetch(`http://localhost:3000/api/teddies/`)

.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(product) {
      console.log(product)
   displayProduct(product)
  })  
  .catch(function(err) {
    // Une erreur est survenue
  });

function displaycart() {

    let cartItems = localStorage.getItem("chooseProductsIncart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
}

displaycart();
   

