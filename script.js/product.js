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
      
    //Utilisation de map Fonction appelée pour chaque élément de colors
      const map1 = product.colors.map(x => `<option value=${x}>${x}</option> ` );

      const option = map1.join('');
      
     
      document.getElementById("product").innerHTML +=
  
  
      //UTILisation de backtik
      `
     
      <div class="col-12 col-lg-4 mx-auto">
          <div class="card">
              <img class=”card-img-top” src="${product.imageUrl}" alt="">
              <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-price">Prix:&nbsp;${product.price / 100} &#8364;</p>
                    <p class="card-text">Description:${product.description}</p>
                    <form>
                        <label="colors-selection">choix de la couleur:</label>
                        <select color="color-name" id="colors-selection">
                            ${option}
                        </select>
                    </form>
                    <button id="btn-add-cart " type="submit" name="btn-add-cart ">Ajouter au panier</buton>
                </div>   
            </div>
        </div>`
   

    //-----------gestion du panier ------------//
    /*
    let carts = document.querySelectorAll('#btn-add-cart');
   
    for (let i=0; i < carts.lenght; i++){
        carts[i].addEventlistener('click',() => {
            cartNumbers();
            

        })
       
            
    }

    function cartNumbers () {
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = JSON.stringify(productNumbers);
        localStorage.setItem('cartNumbers', 1);

            
    }
    

}

     
   


<a id="add-cart " href="#">add cart </a>*/

      
        
     


    









