let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
if (minValue < -999 || minValue > 999) {
    minValue = 0;
}

let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
if (maxValue <- 999 || maxValue > 999){
    maxValue = 100;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
var arr = ['Может это число!','Кажется это число','Ваше число...'];
const phraseRandom = Math.round( Math.random() * 2);
const answerPhrase = (arr[phraseRandom]);
answerField.innerText = `${(answerPhrase)} ${answerNumber}?`;


document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    if (minValue < -999 || minValue > 999) {
        minValue = 0;
    }
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    if (maxValue < -999 || maxValue > 999){
        maxValue = 100;
    }
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber=1;
    orderNumberField.innerText = orderNumber;
    var arr = ['Может это число!','Кажется это число','Ваше число...'];
    const phraseRandom = Math.round( Math.random() * 2);
    const answerPhrase = (arr[phraseRandom]);
    answerField.innerText = `${(answerPhrase)} ${answerNumber}?`;
    
    gameRun = true;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            
            var arr = ['Вы загадали неправильное число!\n\u{1F914}','Я сдаюсь..\n\u{1F92F}','Кажется вы забыли своё число\n\u{1F643}'];
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (arr[phraseRandom]);
             
             answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            var arr = ['Может это число!','Ну тогда точно ','Ваше число...'];
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (arr[phraseRandom]);
            answerField.innerText = `${(answerPhrase)} ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        var arr = ['Я всегда угадываю\n\u{1F60E}','Скайнет не ошибается \n\u{1F916}','\n\u{1F971}..давайте число по сложнее'];
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (arr[phraseRandom]);
            answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            var arr = ['Вы загадали неправильное число!\n\u{1F914}','Я сдаюсь..\n\u{1F92F}','Кажется вы забыли своё число\n\u{1F643}'];
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (arr[phraseRandom]);
             
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            var arr = ['Может это число!','Ну тогда точно ','Ваше число...'];
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (arr[phraseRandom]);

            answerField.innerText = `${(answerPhrase)} ${answerNumber}?`;
            
        }
    }
})

