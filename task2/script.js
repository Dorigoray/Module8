//Обозначние переменных/констант 
const consolelog = document.querySelector('#consoleLog');
const mAlert = document.querySelector('#alert');
const mPrompt = document.querySelector('#prompt');
const Primer1 = document.querySelector('#Primer1');
const Primer2 = document.querySelector('#Primer2');
const Primer3 = document.querySelector('#Primer3');

//block Alert
consolelog.addEventListener('click',() => {
alert('метод для ввода сообщения в консоль');
});
mAlert.addEventListener('click',() => {
alert('метод для отображения информации пользователю ');
});
mPrompt.addEventListener('click',() => {
alert('метод для отображения диалогового окна с запросом на ввод текста');
});
 //block Событий        
 Primer1.addEventListener('click',() => {
console.log('запись в консоле');
 })
 Primer2.addEventListener('click',() => {
    alert('Вот так работает метод!');
})    
 Primer3.addEventListener('click',() => {
    prompt('Введите хоть-что');
})    