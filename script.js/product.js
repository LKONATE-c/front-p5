
//donee pour 1 produit
const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id')
fetch(`http://localhost:3000/api/teddies/${id}`)

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
  function displayProduct(product){
      
    //tableau pour les options
      const option = product.colors.map(x => `<option value=${x}>${x}</option> ` ).join('');

      

      
      
      
     
      document.getElementById("product").innerHTML +=
  
  
      //UTILisation de backtik pour afficher le produit selectionner
      `
     
      <div class="col-12 col-lg-6 mx-auto">
          <div class="card">
              <img class=”card-img-top” src="${product.imageUrl}" alt="">
              <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-price">Prix:&nbsp;${product.price / 100} &#8364;</p>
                    <p class="card-text">Description:${product.description}</p>
                    
                        <label for="colors-selection">choix de la couleur:</label>
                        <select color="color-name" id="colors-selection">
                            ${option}
                        </select>

                    <button id="add-cart"  name="add-cart">Ajouter au panier</buton>
                </div>   
            </div>
        </div>`
   

    //-----------gestion du panier ------------//
       let chooseProduct = {

        name: product.name,
        id: product._id,
         incart: 0,
         colors:  option,
         price: product.price/ 100
       }
         
          document.getElementById("add-cart").addEventListener('click', ()=>{
            cartNumbers( chooseProduct );
            totalCost(chooseProduct);
            
          })
        }
          
        
          
          //fonction pour garde les element dans le panier sur la barre de nav//
          function onLoadcartNumbers() {
            let productNumbers = localStorage.getItem("cartNumbers");

            if(productNumbers){
                document.querySelector('.nav-item span').textContent = productNumbers;
            }
          }

          //ajout produit au local storage//
          function cartNumbers( chooseProduct ) {
          
            let productNumbers = localStorage.getItem("cartNumbers");
            
          
            productNumbers = parseInt(productNumbers);
            
            if (productNumbers) {
                localStorage.setItem("cartNumbers", productNumbers + 1);
                document.querySelector('.nav-item span').textContent = productNumbers + 1;

            } else {
                localStorage.setItem("cartNumbers", 1 );
                document.querySelector('.nav-item span').textContent = 1;
            }
            //ajout des info du produit au local storage
           setItems(chooseProduct);
         
        }
        function setItems(chooseProduct) {
         let cartItems = localStorage.getItem("chooseProductsIncart");
         cartItems = JSON.parse(cartItems);
        
         if(cartItems != null) {
            //ajout d'un produit différent//
          if(cartItems[chooseProduct.name] == undefined) {
            cartItems = {
              ...cartItems,
              [chooseProduct.name]: chooseProduct
            }
          }
           cartItems[chooseProduct.name].incart += 1;
         } else {
          chooseProduct.incart = 1;
          cartItems = {
           [chooseProduct.name]: chooseProduct
         }
         }
          
          localStorage.setItem("chooseProductsIncart", JSON.stringify(cartItems));
        }

        //prix du panier//
        function totalCost(chooseProduct) {
          //console.log("product price", chooseProduct.price);//

          let cartCost = localStorage.getItem("totalCost");
        

          if(cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + chooseProduct.price);

          } else{
            localStorage.setItem("totalCost", chooseProduct.price);
          }
        }
        
        
        onLoadcartNumbers();

           
          
   


      
        
     


    








   
