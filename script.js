import {products} from "./productList.js";

const container = document.getElementById('container')

let productsHTML = ` `

for(let product of products){
    productsHTML += `
 <div class="product">
    <h4>${product.name}</h4>
    <h3> $${product.price}</h3>
    <img src="${product.image}">
    <button id="${product.id}"> Click</button>
</div>
 `
}

container.innerHTML = productsHTML

container.addEventListener('click', (e)=>{
   document.getElementById(e.target.id).parentElement.style.background = 'lightblue'
})