
  //RECUPERATTION DONNE API
fetch("http://localhost:3000/api/teddies")


.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(products) {
 displayProducts(products)
})  
.catch(function(err) {
  // Une erreur est survenue
});
function displayProducts(products){
  for(const product of products){
    
   
    document.getElementById("products").innerHTML +=


    //UTILisation de backtik
    `
   
    <div class="col-12  col-md-6 mx-auto">
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
  }
   


