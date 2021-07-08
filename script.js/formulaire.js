
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
        function sendOrder(e){
            e.preventDefault();
            fetch("", {
              method: "POST",
              headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json ; charset="UTF-8'
              },
              body: JSON.stringify({coordonnee: document.getElementsByTagName("coordonnee").coordonnee})
            })
        }
    }
})






