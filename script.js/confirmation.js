

let order = JSON.parse(localStorage.getItem("order"));


main.innerHTML = 
`
<div>
    <div class="mx-auto">
     <h2>Merci pour votre commande ${"order".firstname } </h2>
     <p>le montant de votre commande est de : ${"order".confirmationprice}</P>
     <p> Identifiant de votre commande : ${"order".resultId}</p>
    </div>
</div>

`
