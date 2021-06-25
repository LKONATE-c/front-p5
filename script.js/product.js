
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
     
      <div class="col-12 col-lg-4 mx-auto">
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
       
    
      
          document.getElementById("add-cart").addEventListener('click', ()=>{
            cartNumbers();
            const found = cart.find(cart=> cart.id === toAdd.id); // dans l'événement click 
            if (found) {
                            found.quantity += 1;
            } else {
              toAdd.quantity = 1;
              cart.push(toAdd);
            }
            // update localstorage 
          })
          /*
          //fonction pour garde les element dans le panier sur la barre de nav
          function onLoadcartNumbers() {
            let productNumbers = localStorage.getItem("cartNumbers");
            if(productNumbers){
                document.querySelector('.nav-item span').textContent = productNumbers;
            }
          }*/

          //ajout produit au local storage
          function cartNumbers() {
             
            const cart =localStorage.getItem("cart", [{id:'',quantity:1}]) // Recupérer au localstorage
           // const cart = [{id: id , quantity: 4}, {id: id, quantity: 6}]; // Recupérer au localstorage
 

            const toAdd = {id: id}; // l'ourson en cours 
           
            console.log(cart)
            
           
             

          }
          /*
          onLoadcartNumbers();
          let productNumbers = localStorage.getItem("cartNumbers");
            

            productNumbers = parseInt(productNumbers);
            
            if (productNumbers){
                localStorage.setItem("cartNumbers", productNumbers + 1);
                document.querySelector('.nav-item span').textContent = productNumbers + 1;

            }else {
                localStorage.setItem("cartNumbers", _id, 1 );
                document.querySelector('.nav-item span').textContent = 1;
            }*/

           

  
      

  

    


}
   


      
        
     


    








   
