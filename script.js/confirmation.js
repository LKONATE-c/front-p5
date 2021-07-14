

let order = JSON.parse(localStorage.getItem("order"));


main.innerHTML = 
`
<div>
    <div class="mx-auto">
     <h2>Merci pour votre commande ${order.contact.firstName} </h2>
     <p>le montant de votre commande est de : ${order.price}</P>
     <p> Identifiant de votre commande : ${order.orderId}</p>
    </div>
</div>

`
