const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const div = document.querySelector("div");


const arrPoke = [];
/***
 * 1 этап - функция для получения покемонов по имени
 * 2 - сохранение покемона в общий массив
 * 3 - перерисовка массива покемонов
 */


/***
 * получает имя покемона
 * возвращает картинку
 * 
 */
const getPoke = async (name) => {
	let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	res = await res.json();
	console.log(res);
	return res;
}


btn.addEventListener("click", async () => {
	const name = inp.value;
	const res = await getPoke(name);
	arrPoke.push(res)
	console.log(arrPoke);
	render()
});

/***
 * создаем функцию для перерисовки картинок
 * удаляет и перерисовыет
 */

const render = () => {
	div.innerHTML = '';
	arrPoke.forEach((poke) => {
		const image = document.createElement("img");
		image.src = poke.sprites.front_default;
		div.append(image);
	});
};

