const inp = document.querySelector(".inp");
const btn = document.querySelector(".btn");
// const img = document.querySelector(".img");
const body = document.querySelector("body");

const getPok = function (name) {
	fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then((data) => data.json())
		.then(data => {
			const newImg = document.createElement("img");
			newImg.src = data.sprites.front_default;
			body.append(newImg);
		}).catch(() => {
			console.log("error");
			// img.src = '';
		})
}

btn.addEventListener("click", () => {
	const name = inp.value;
	getPok(name);
})
