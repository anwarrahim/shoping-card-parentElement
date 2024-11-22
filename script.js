import {products} from "./productList.js";

const container = document.getElementById('container')
const clearBtn = document.getElementById('clear-btn')

let productsHTML = ` `

for(let product of products){
    productsHTML += `
 <div class="product on-offer">
    <h4>${product.name}</h4>
    <h3> $${product.price}</h3>
    <img src="${product.image}" alt="${product.image}">
    <button id="${product.id}"> Click</button>
</div>
 `
}

container.innerHTML = productsHTML

container.addEventListener('click', (e)=>{
   document.getElementById(e.target.id).parentElement.classList.add('purchased')
    document.getElementById(e.target.id).parentElement.classList.remove('on-offer')
})

clearBtn.addEventListener('click', ()=>{
    const productClearAll = document.getElementsByClassName('product')
    for(let product of productClearAll){
        product.classList.remove('purchased')
    }
})

