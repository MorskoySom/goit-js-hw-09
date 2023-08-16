const elem = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}
console.log(elem.btnStart);
console.log(elem.btnStop);
console.log(elem.body);

elem.btnStart.addEventListener(`click`, handlerStart);
elem.btnStop.addEventListener(`click`, handlerStop);

let id;
function handlerStart() {
    elem.btnStart.disabled = "disabled";
    id = setInterval(() => {
        const rundomColor = getRandomHexColor();
        elem.body.style.backgroundColor = rundomColor;
    }, 1000)
}

function handlerStop() {
    elem.btnStart.disabled = false;
    clearInterval(id);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}