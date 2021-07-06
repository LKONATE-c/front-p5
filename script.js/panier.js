
//creation de variable
let teddies =  localStorage.getItem("chooseProductsIncart");
let priceTotal = localStorage.getItem("totalCost");

 //permet de voir ce qui a ete ajouté au panier au directement ds le local storage
function getTeddie(){
    let teddie = localStorage.getItem("chooseProductsIncart");
    teddie = JSON.parse(teddie);
    for (i = 0; 1 < teddie.length; 1++){
        if(teddie[i]){
            let template = {
                tr: document.createElement("tr"),
                td: document.createElement("td"),
                tdName: document.createElement("td"),
                tdQuantity: document.createElement("td"),
                tdPrice: document.createElement("td")
            }
            table.appendChild(template.tr);

            template.tr.appendChild(template.td);
            template.td.textContent = teddie[i].id;

            template.tr.appendChild(template.tdName);
            template.tdName.textContent = teddie[i].name;
        }

    }
}



   
