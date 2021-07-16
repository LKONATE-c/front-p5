
//creation d'une variable pour recuperer id 
let bear = [] ;


//recuperation des produits ds le local storage
function getTeddie(){
    const teddies = JSON.parse(localStorage.getItem("chooseProductsIncart")) || [];
    
    for (const [name,teddie] of Object.entries(teddies)){
        bear.push (teddie.id);
         
        document.getElementById("products").innerHTML +=
        `
        <tr>
        <td >${teddie.name}</td>
        <td>${teddie.price} &#8364;</td>
        <td>${teddie.incart}</td>
        <td>${teddie.price*teddie.incart} &#8364;</td>
        </tr>
        
        `
       
      
    }
    
}
//recuperation du prix total ds le local storage 
function getprice(){
    const price = JSON.parse(localStorage.getItem("totalCost"))
    
    if (price === null ) {
       
        return 0;
    }
    
    document.getElementById("totat-price").innerHTML +=
    ` 
    <div id="totat-price">${price} &#8364;</div>
    `
    
}

getprice();
getTeddie();


   
