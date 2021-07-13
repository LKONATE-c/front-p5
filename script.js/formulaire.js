
//validation du formulaire 

document.forms["coordonnee"].addEventListener("submit", function(e) {
  e.preventDefault();
    let erreur;

    let inputs = this;
   
    for (let i = 0; i < inputs.length; i++) {
      
        if (!inputs[i].value) {
            erreur = "veuillez renseigner tous les champs";
           
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
              
        let firstname  = document.getElementById("firstname").value;
        let lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let adress = document.getElementById("adress").value;
        let city = document.getElementById("city").value;
       
       
            fetch("http://localhost:3000/api/teddies/order", {
              method: "POST",
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json ; charset=UTF-8'
              },
              body: JSON.stringify({
                  contact: {
                      firstName:firstName,
                      lastName:lastName,
                      email:email,
                      address:address,
                      city:city

                  },
                  products:bear
              })
              
            })
            .then(function(res) {
            
              
                if (res.ok) {
                  
                  return res.json();
                }
              })
              .then(function(confirmation) {
                
              confirmation.price = JSON.parse(localStorage.getItem("totalCost"))
               localStorage.removeItem("totalCost");
               localStorage.removeItem("chooseProductsIncart");
               localStorage.removeItem("cartNumbers");
                
                localStorage.setItem("order",JSON.stringify(confirmation));

                window.location.assign("/page-confirmation.html")
              });
            
        
            
    } 
});






