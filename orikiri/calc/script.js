const body = document.querySelector("body");
const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const div = document.querySelector(".block");

/***
 * 1 - обращаемся к серверу по ссылке
 * 2 - обработать ответ
 * 3  обработка запроса
 * 4 - ищет картинку
 * 5 - добавляет картинку в html 
 * 
 * 
 */

const getPok = function(name) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	.then((data) => data.json())
		.then(data => {
			const newImg = document.createElement("img");
			newImg.src = data.sprites.front_default;
			div.append(newImg);
	}).catch(() => {
		console.log("error");
		// img.src = "";
	})
// console.log(data);
}

btn.addEventListener("click", () => {
	const name = inp.value;
	getPok(name)
})

// getPok("charmander")

