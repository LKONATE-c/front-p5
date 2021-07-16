

let order = JSON.parse(localStorage.getItem("order"));


main.innerHTML = 
`
<div>
    <div class="mx-auto">
     <h2>Merci pour votre commande ${order.contact.firstName} </h2>
     <p>Le montant de votre commande est de : ${order.price}  &#8364;</P>
     <p> Identifiant de votre commande : ${order.orderId}</p>
    </div>
</div>

`
