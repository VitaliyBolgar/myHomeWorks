
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
const btn = document.querySelector(".btn");
const ul = document.querySelector(".ul");

const tasks = [];

const createTask = (task) => {
	tasks.push(task);
}


btn.addEventListener('click', () => {
	const task = {};
	task.text = inp.value;
	task.id = new Date().getTime();
	task.done = false;
	createTask(task);
	// console.log(task);
renderTaskList();
})

const renderTaskList = () => {
	ul.innerHTML = "";
	tasks.forEach(task => {
		const li = document.createElement('li');
		const inp = document.createElement('input');
		const delbtn = document.createElement('button');
		delbtn.innerHTML = "X";
		inp.value = task.text;
		delbtn.addEventListener('click',()=>{removeTask(task);renderTaskList()})
		li.append(inp,delbtn);
		ul.append(li);

	})

	const removeTask = (task)=>{
		const index = tasks.findIndex((t)=>{return t.id === task.id})
		tasks.splice(index,1);
		console.log(index);
	}

}