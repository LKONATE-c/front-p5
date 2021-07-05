//creation de variable
let teddies =  localStorage.getItem("chooseProductsIncart");
let priceTotal =localStorage.getItem("totalCost");

fetch("http://localhost:3000/api/teddies")
.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(chooseProduct) {
     
   displayProduct(chooseProduct)
  })  
  .catch(function(err) {
    // Une erreur est survenue
  });

  function displayProduct(chooseProduct){

    document.getElementById("chooseproduct").innerHTML +=
    `
    <div class="row" id="chooseproduct">
            <div class="product-panier">
                <div class="product-header">
                    <h5 class="product-name">name</h5>
                    <h5 class="price">Price</h5>
                    <h5 class="quantity">Quantity</h5>
                    <h5 class="total">Total</h5>
                </div>


    `
    
}
  
// permet de voir ce qui a ete ajouté au panier au directement ds le local storage
function displaycart() {

    let cartItems = localStorage.getItem("chooseProductsIncart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let productPanier = document.querySelector("product-panier");
    if(cartItems && productPanier) {
        console.log("boooo");
    }
}

displaycart();
   




//variable pour formulaires de contact

let formNom = document.getElementById("nom");
let formPrenom = document.getElementById("prenom");
let formMail =  document.getElementById("mail");
let formAdresse =  document.getElementById("adresse");
let formVille =  document.getElementById("ville");
let formCodePostal =  document.getElementById("code-postal");

let validation = document.getElementsById('bouton-envoie')
