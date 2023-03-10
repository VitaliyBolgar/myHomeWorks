/***
 * toDOlist
 * определиться с концептом (макетом)
 * расположить элементы ввода на экран
 * реализовать функцию сохранения массив данных
 * реализовать функцию вывода массива данных
 *    функция удаления
 * 		функция редактирования
 */
const inp = document.querySelector(".inp");
const inpFind = document.querySelector(".inpFind");
const btn = document.querySelector(".btn");
const findBtn = document.querySelector(".findBtn");
const ul = document.querySelector(".ul");
const progress = document.querySelector("progress");

const tasks = [];

const createTask = (task) => {
  tasks.push(task);
};

btn.addEventListener("click", () => {
  const task = {};
  task.text = inp.value;
  task.id = new Date().getTime();
  task.done = false;
  createTask(task);
  // console.log(task);
  inpFind.value = "";
  inp.value = "";
  renderTaskList();
});

inpFind.addEventListener("keyup", () => {
  renderTaskList();
});

const renderTaskList = () => {
  ul.innerHTML = "";
  const query = inpFind.value || ""; //null ( через значение)
  //если значения нет - то возвращай пустую строку
  //const patt = new RegExp(`.*?${query.toLowerCase()}.*?`, 'i');
  // язык регулярных выражений
  // i - регулярное выражение - найди мне в строке регулярную подстроку в независимости от регистру
  const fTasks = tasks.filter((task) => {
    // колбек\создадим новый массив и применим метод forEach
    //должен вернуть истину ()
    if (query == "") return true;
    //return patt.test(task.text);
    // test возвращает либо истину либо ложь (если соответствует)
    return task.text?.toLowerCase().includes(query.toLowerCase());
    // ? проверяет существует ли свойство includes в text, если НЕТ то вернет undefined (не упадет)
  });
  let countDone = 0;
  fTasks.forEach((task) => {
    const li = document.createElement("li");
    const inp = document.createElement("input");
    const delbtn = document.createElement("button");
    const checkbox = document.createElement("input");
    delbtn.innerHTML = "X";
    checkbox.type = "checkbox";
    inp.value = task.text;
    checkbox.checked = task.done;
    if (task.done == true) countDone++; // для ПБ
    delbtn.addEventListener("click", () => {
      console.log(task);
      removeTask(task);
      renderTaskList();
    });
    checkbox.addEventListener("click", () => {
      console.log(task);
      markTask(task, checkbox.checked);
      renderTaskList();
    });
    li.append(checkbox, inp, delbtn);
    ul.append(li);
  });
  progress.max = fTasks.length;
  progress.value = countDone;
};

const removeTask = (task) => {
  const index = tasks.findIndex((t) => {
    return t.id === task.id;
  });
  tasks.splice(index, 1);
  console.log(index);
};

const markTask = (task, mark) => {
  const index = tasks.findIndex((t) => {
    return t.id === task.id;
  });
  tasks[index].done = !!mark; // если ноль то два !! перевод любого значение в булевый тип
};
