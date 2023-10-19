const trafficLightEl = document.querySelector('#trafficLight');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');


function makeGreen() {
    trafficLightEl3.style.background = ('black');
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    trafficLightEl2.addEventListener('click', makeYellow);
    trafficLightEl3.addEventListener('click', makeYellow);
}


function makeYellow() {
    trafficLightEl.style.background = ('black');
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl2.removeEventListener('click', makeYellow);
    trafficLightEl3.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    trafficLightEl2.addEventListener('click', makeRed);
    trafficLightEl3.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
}

trafficLightEl.addEventListener('click', makeGreen);
trafficLightEl2.addEventListener('click', makeGreen);
trafficLightEl3.addEventListener('click', makeGreen);
