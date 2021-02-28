// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, 
// сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// #1
// const btnBox = document.querySelector('#controls');
// const btnDestroy = btnBox.lastElementChild;
// const btnRender = btnDestroy.previousElementSibling;
// const boxesEl = document.querySelector('#boxes');
// const numberEl = btnBox.firstElementChild;
// const boxStyles = boxesEl.children;

// const handleClearOutput = () => {
//     boxesEl.innerHTML = '';
// }

// const handleIntroductionNumber = () => {
//     const numberOfInputs = numberEl.value
//     let counter = 1;
//     while (counter <= numberOfInputs) {

//         function getRandomInt(min, max) {
//             return Math.floor(Math.random() * (max - min)) + min;
//         };
//         const colorNumvber = 'rgb(' + `${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` + ',' + `${getRandomInt(0, 1000)}` + ')';
//         const blockSize = 30 + counter * 10;
//         const boxingElementCreator = boxesEl.insertAdjacentHTML('afterbegin', `<div style='height: ${blockSize}px; width: ${blockSize}px; background-color: ${colorNumvber}'></div>`);
//         counter += 1;
//     };
// };

// btnDestroy.addEventListener('click', handleClearOutput);
// btnRender.addEventListener('click', handleIntroductionNumber);

// #2
const control = document.querySelector('#controls');
const userInput =control.querySelector('input');
const boxes = document.querySelector('#boxes');
const renderBtn = control.querySelector('button[data-action="render"]');
const destroyBtn = control.querySelector('button[data-action="destroy"]');

const createBoxes = (amount) => {
    destroyBoxes();
    let size = 30;
    const itemsList = [];
       
    for (let i = 0; i < amount; i += 1){
        const colorRandom = Math.floor(Math.random()*16777215).toString(16);
        const item = document.createElement('div');
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.style.marginBottom = '10px';
        item.style.backgroundColor = `#${colorRandom}`;
        itemsList.push(item);
        size += 10;
    };
    boxes.prepend(...itemsList);
}

const destroyBoxes = () => {
    while (boxes.firstChild) {
        boxes.removeChild(boxes.lastChild);
    };
};

renderBtn.addEventListener('click', () => createBoxes(userInput.value));
destroyBtn.addEventListener('click', () => destroyBoxes());