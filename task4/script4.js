const link = document.querySelector('#t');

link.addEventListener('click', 
  (event) => {
    event.preventDefault();
    link.textContent = prompt('новый текст ссылки');
})





