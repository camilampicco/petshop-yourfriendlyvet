const container = document.querySelector('.flex-container');
let contador = 0

function createProducts(name, model, price){
    contador ++;
    img = "<img class='product-img' src=`./assets/${name}.PNG`>";
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

// buyButton.addEventListener("click", (e) => {
//     alert('The product is added to the shopping cart')
//     e.preventDefault();
// })




//creacion de Usernames

const username = document.getElementById("username")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const button = document.getElementById("btn-send")
const result = document.querySelector(".result")


button.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validateField ();
    if (error [0]){
        result.innerHTML = error [1];
    } else {
        result.innerHTML = 'Your username has been successfully created!'
    }
})

const validateField = () => {
    let error = [];
    let listOfNames = ['Ana'];
    if (username.value === '' ) {
        error [0] = true;
        error [1] = 'The user name cannot be empty'
        return error;
    }
    else if (listOfNames.includes(username.value)) {
        error [0] = true;
        error [1] = 'The user name is taken, please choose another one'
        return error;
        }
    error [0] = false;
    return error
}
