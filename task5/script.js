let button = document.querySelector('#button');
let inputt = document.querySelector('#input');
let duplicate = document.querySelector('#duplicateField');

inputt.addEventListener('keydown', (event) => {
    inputt.value = duplicate;
    
})

button.addEventListener('click', (event) => {

    event.preventDefault();
    console.log(inputt.value);
    inputt.value = "";
    duplicate.textContent = "";
})

