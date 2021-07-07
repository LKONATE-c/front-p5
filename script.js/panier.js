
/*/creation de variable
let teddies =  localStorage.getItem("chooseProductsIncart");
let priceTotal = localStorage.getItem("totalCost");*/


function getTeddie(){
    const teddies = JSON.parse(localStorage.getItem("chooseProductsIncart")) || [];
    console.log(teddies);
    for (const [name,teddie] of Object.entries(teddies)){
        document.getElementById("products").innerHTML +=
        `
        <tr>
        <td>${teddie.name}</td>
        <td>${teddie.price}</td>
        <td>${teddie.incart}</td>
        <td>${teddie.name}</td>

        </tr>
        
        `
       
      
    }
    
}
function getprice(){
    const price = JSON.parse(localStorage.getItem("totalCost"))
    console.log(price);
    document.getElementById("products").innerHTML +=
    ` 
    <td>${price.price}</td>
    `

}
getprice();
getTeddie();


   
