
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
        fetch 
    }
})






