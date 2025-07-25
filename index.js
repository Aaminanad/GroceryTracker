import{initializeApp} from"https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
const appSettings={
    databaseURL:"https://playground-e7828-default-rtdb.asia-southeast1.firebasedatabase.app/"

}

const app= initializeApp

const inputFieldEL = document.getElementById("input-field")
const addButtonEL = document.getElementById("add-button")


addButtonEL.addEventListener("click", function(){
    let inputValue = inputFieldEL.value
    console.log(inputValue)
}) 