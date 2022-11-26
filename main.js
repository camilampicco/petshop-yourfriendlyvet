const container = document.querySelector('.flex-container');
let contador = 0

function createProducts(name, model, price){
    contador ++;
    img = "<img class='product-img' src='assets/images/cat--cave.png'>";
    name = `<h4> ${name} </h4>`;
    model = `<p> ${model} </p>`;
    price = `<p> $${price} </p>`;
    return [img, name, model, price]
}

const changeHidden = (number) =>{
    document.querySelector(".product-data").value = number
}

let documentFragment = document.createDocumentFragment();

for (let i = 0; i <= 20; i++) {
        let modelRandom = Math.round(Math.random()*10000);
        let priceRandom = Math.round(Math.random()*10+30);
        let product = createProducts(`Product ${i}`, `model ${modelRandom}`, priceRandom)   
    let div = document.createElement ("DIV" );
    addEventListener("click", ()=>{changeHidden(modelRandom)})
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = product[0] + product[1] + product[2] + product[3];
    documentFragment.appendChild(div)
}

container.appendChild(documentFragment);
