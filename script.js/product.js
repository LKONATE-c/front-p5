//donee pour 1 produit
const searchParams = new URLSearchParams(window.location.search);
fetch(`http://localhost:3000/api/teddies/${id}`)
   
.then(res => console.log(res))