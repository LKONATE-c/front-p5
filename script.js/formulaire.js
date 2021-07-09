
//validation du formulaire
document.forms["coordonnee"].addEventListener("submit", function(e) {

    let erreur;

    let inputs = this;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "veuillez renseigner tous les champs";
            break;
        }
    }

    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        
            fetch("http://127.0.0.1:5500/page-confirmation.html", {
              method: "POST",
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json ; charset="UTF-8'
              },
              body: JSON.stringify({value: document.getElementsByTagName("coordonnee").value})
              
            })
            .then(function(res) {
                if (res.ok) {
                  return res.json();
                }
              })
              .then(function(value) {
                document.getElementById("totat-price")

                window.location.assign("/page-confirmation.html");
              });
            
        
            
    }
    
})






