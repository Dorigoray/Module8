const buttonid = document.querySelector('#button');
const inputid = document.querySelector('#input');
const duplicate = document.querySelector('#duplicateField');

inputid.addEventListener('keyup',(event) => {
    duplicate.textContent = inputid.value; 
})

buttonid.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(inputid.value);
    duplicate.textContent = "";
    inputid.value = "";
})