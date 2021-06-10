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
      console.log("rrrrr")
    
      
     
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
                <a href="products.html?id=${product._id}" class="stretched-link"></a>
              </div>
          </div>
      </div>`
     }
    








   
