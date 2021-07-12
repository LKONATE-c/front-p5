
//validation du formulaire 

document.forms["coordonnee"].addEventListener("submit", function(e) {
  
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
       
       
            fetch("http://page-confirmation.html", {
              method: "POST",
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json ; charset=UTF-8'
              },
              body: JSON.stringify({
                  coordonnee: {
                      firstname:firstname,
                      lastname:lastname,
                      email:email,
                      adress:adress,
                      city:city

                  }
              })
              
            })
            .then(function(res) {
            
              
                if (res.ok) {
                  
                  return res.json();
                }
              })
              .then(function(confirmation) {
                
                confirmation.Price = totat-price;
                let result = document.getElementById('result');
                localStorage.setItem("order",JSON.stringify(confirmation));
                window.location.assign("http://page-confirmation.html");
              });
            
        
            
    } 
});






