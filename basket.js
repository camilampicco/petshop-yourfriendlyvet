//creacion de Usernames

const username = document.getElementById("username")
const surname = document.getElementById("surname")
const email = document.getElementById("email")
const buttonForm = document.getElementById("btn-send")
const result = document.querySelector(".result")


buttonForm.addEventListener("click", (e) => {
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

