const div = document.querySelector(".block");
const body = document.querySelector("body");
const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
// const img = document.querySelector(".img");

console.log(inp);

const getPok = function (name) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((data) => data.json())
		.then(data => {
			const newImg = document.createElement("img");
			newImg.src = data.sprites.front_default;
			div.append(newImg);
		}).catch(() => {
			console.log("error");
			// img.src = '';
		})
}

btn.addEventListener("click", () => {
	const name = inp.value;
	getPok(name);
})
