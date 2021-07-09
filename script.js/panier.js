

//recuperation des produits ds le local storage
function getTeddie(){
    const teddies = JSON.parse(localStorage.getItem("chooseProductsIncart")) || [];
    
    for (const [name,teddie] of Object.entries(teddies)){
        document.getElementById("products").innerHTML +=
        `
        <tr>
        <td >${teddie.name}</td>
        <td>${teddie.price} &#8364;</td>
        <td>${teddie.incart}</td>
        
        </tr>
        
        `
       
      
    }
    
}
//recuperation du prix total ds le local storage 
function getprice(){
    const price = JSON.parse(localStorage.getItem("totalCost"))
    console.log(price);
    document.getElementById("totat-price").innerHTML +=
    ` 
    <div id="totat-price">${price} &#8364;</div>
    `

}
getprice();
getTeddie();


   
