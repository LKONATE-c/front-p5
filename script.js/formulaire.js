
//validation du formulaire
document.getElementById("coordonnee").addEventListener("submit", function(e) {

    let erreur;

    let inputs = this.getElementsByTagName("input");

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

        let firstName  = document.getElementById("firstname").value;
        let Lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        let adress = document.getElementById("adress").value;
        let ville = document.getElementById("city").value;
        
            fetch("", {
              method: "POST",
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json ; charset="UTF-8'
              },
              body: JSON.stringify({
                  coordonnee: {
                      firstName:firstname,
                      Lastname:lastname,
                      email:email,
                      adress:adress,
                      ville:city


                  }
              })
              
            })
            .then(function(res) {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(function(data) {
                //document.getElementById("totat-price")

                //window.location.assign("");
              });
            
        
            
    }
    
})






