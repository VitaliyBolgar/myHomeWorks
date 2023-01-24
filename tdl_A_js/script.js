const inp = document.querySelector('.inp');
const btn = document.querySelector('.btn');
const ul = document.querySelector('.ul');


/***
 * определиться с концептом (макетом)
 * расположить элементы ввода на экране
 * реализовать функцию сохранения массива данных
 * реализовать функцию вывода массива данных
 * улучшить функцию вывода
 *   функция удаления
 *   функция редактирования
 * 
 */

const tasks = [];

const createTask = (task) => {
	tasks.push(task);
};

btn.addEventListener('click', () => {
	const task = {}; // вот он наш объект
	console.log(task);
	task.text = inp.value;
	task.id = new Date().getTime(); //метод пишет время в виде целого числа длинного 
	task.done = false;
	// console.log(task);
	createTask(task);
	inp.value = '';
	renderTaskList();
})

const renderTaskList = () => {
	//при каждом обновлении списка мы удаляем его отображение и заново отрисовываем
	ul.innerHTML = "";
	tasks.forEach(task => {
		const li = document.createElement('li');
		const inp = document.createElement('input');
		const checkbox = document.createElement('input'); // 2 волна
		const delbtn = document.createElement("button");
		delbtn.innerHTML = "🗑"; // 2 волна
		inp.value = task.text;

		delbtn.addEventListener('click', () => { removeTask(task); renderTaskList()});
		checkbox.type = 'checkbox'; // 
		li.append(checkbox,inp, delbtn)
		ul.append(li);
	});
}

const removeTask = (task) => {
	//что принимает? что возвращает?
	// принимает задачу и возвращает пустоту
	// Нужно найти в нашем массиве конкретно этот объект 
	// теперь можно применять splice (ищем положения таски в массиве)

	const index = tasks.findIndex((t) => { return t.id === task.id })
	// как примет статус истины
	tasks.splice(index, 1)
	console.log(index);

}
