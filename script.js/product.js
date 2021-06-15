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
      
    //fction map qui apl une l argument qui a une fct 
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
                    <a id="add-cart cart1" href="#">add cart </a>
                    <label="colors-selection">choix de la couleur:</label>
                    <select color="color-name" id="colors-selection">
                    ${option}
                </div>   
            </div>
        </div>`
    }

    
   









     /*
    let carts = document.querySelectorAll('.add-cart');
   vire la boucle
    for (let i=0; i < carts.lenght; i++){
        carts[i].addEventlistener('click',() => {
            

        })
       

    }

    function cartNumbers () {
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);
        localStorage.setItem('cartNumbers', 1);
    }*/


       /*
        getColors().then(data=> {
            let option;
            Object.entries(data.colors).forEach(color => {
              
                option = document.createElement("option");
                option.text =colors[1].name;

                colorSelect.add(option)
            }
                )
        }
            )*/
        
     


    








   
