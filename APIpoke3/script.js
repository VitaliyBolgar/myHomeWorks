/***
 * 
 * Программа
 * 1 этап - функция получения покемонов по имени
 * 2 этап - сохранение элементов в массив
 * 3 этап - рендеринг масстива покемонов
 * 
 */

const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const div = document.querySelector("div");

const arrPoke = [];

/***
 * называется
 * получает имя покемона
 * картинку
 */

const getPoke = async (name) => {
	let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	res = await res.json();
	console.log(res);
	return res;
}


btn.addEventListener('click', async () => {
	const name = inp.value;
	const res = await getPoke(name);
	arrPoke.push(res);
	console.log(arrPoke);
	render();
})


const render = () => {
	div.innerHTML = "";
	arrPoke.forEach((poke) => {
		const image = document.createElement('img');
		const txt = document.createElement('p');
		image.src = poke.sprites.front_default;
		txt.innerHTML = poke.stats[0].base_stat;
		div.append(image);
		div.append(txt);
	})
}
// getPoke()