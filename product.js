const params = URLSearchParams(window.location.search) 
console.log(params);
const id = parseInt(params.get('id'))

const products =products.find(x=>x.id==id) 

const product = document.createElement('div')
product.innerHTML=`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="./images/${products.Image}" alt="Card image cap">
<div class="card-body">
<h3>${products.name}</h3>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <p>Price:${products.price}$</p>
</div>
</div>`
const container = document.querySelector('.container')
container.append(product)

