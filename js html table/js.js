const body = document.querySelector('body');
// Создаем таблицу (table) и элементы таблицы: ряд заголовка таблицы - tHead, основная часть - tBody
let table = document.createElement('table');
let tHead = document.createElement('thead');
let tBody = document.createElement('tbody');

// Добавляем элементы таблицы в таблицу с помощью метода appendChild.
table.appendChild(tHead);
table.appendChild(tBody);
// Добавляем таблицу в body с помощью метода appendChild
body.appendChild(table);

// Создаем элементы первого ряда (row1), а также ячейки этого ряда
let row1 = document.createElement('tr');
let b1 = document.createElement('td');
b1.innerHTML = "Столб 1";
let b2 = document.createElement('td');
b2.innerHTML = "Столб 2";
let b3 = document.createElement('td');
b3.innerHTML = "Столб 3";
// Добавляем ячейки в ряд, и сам ряд в строку заголовка
row1.appendChild(b1);
row1.appendChild(b2);
row1.appendChild(b3);
tHead.appendChild(row1);
// Создаем элементы второго ряда и сам ряд
let row2 = document.createElement('tr');
let b4 = document.createElement('td');
b4.innerHTML = "Клетка 1";
let b5 = document.createElement('td');
b5.innerHTML = "Клетка 2";
let b6 = document.createElement('td');
b6.innerHTML = "Клетка 3";
// Добавляем ячейки в ряд, и сам ряд в первую строку основной части таблицы
row2.appendChild(b4);
row2.appendChild(b5);
row2.appendChild(b6);
tBody.appendChild(row2);
// Создаем элементы третьего ряда и сам ряд
let row3 = document.createElement('tr');
let b7 = document.createElement('td');
b7.innerHTML = "Клетка 4";
let b8 = document.createElement('td');
b8.innerHTML = "Клетка 5";
let b9 = document.createElement('td');
b9.innerHTML = "Клетка 6";
// Добавляем ячейки в ряд, и сам ряд во вторую строку основной части таблицы
row3.appendChild(b7);
row3.appendChild(b8);
row3.appendChild(b9);
tBody.appendChild(row3);


// ---------- Присваиваем классы ------------
// Присваеваем класс row всем строкам таблицы с помощью .className. Для этого создаем массив. 
let r = [row1, row2, row3];
r.forEach(element => {
    element.className = 'row';
})
// Присваеваем класс block всем ячейкам таблицы с помощью .className. Для этого создаем массив. 
let b = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
b.forEach(element => {
    element.className = 'block';
});

// ------- Прописываем стили -------

// Прописываем стили для Body, Table, и для заголовка строки
if (body) 
    body.style.background = "#d9e6f2";
if (table)
    table.style.borderCollapse = 'collapse'; // убираем отступы между ячейками
if (tHead)
    tHead.style.fontWeight = '900';
    tHead.style.fontSize = '1.5rem';
// Прописываем стили для рядов, вызывая все элементы с классом row с помощью query.SelectorAll
let row = document.querySelectorAll(".row");
row.forEach (element => 
    element.style.height = '100px')
// Прописываем стили для ячеек, вызывая все элементы с классом block с помощью query.SelectorAll
let block = document.querySelectorAll('.block');
block.forEach (element =>
    element.style = 'width:200px; border:1px solid black; text-align: center'
    )


// Для ячеек, у которых другой background color, уточняем класс, добавляя цвет в название класса, с помощью .classList.add. Далее прописываем отдельно стиль background.
b3.classList.add('blue');
let blue = document.querySelector('.block.blue');
blue.style.background = '#0040ff';

// Создаем массив на две красные ячейки, далее добавляем цвет в класс, после дополняем стиль ячейки. 
let redBlock = [b4, b8];
redBlock.forEach(element =>
    element.classList.add('red')
    )
    let red = document.querySelectorAll('.block.red');
    red.forEach (element => element.style.background = '#e62e00');