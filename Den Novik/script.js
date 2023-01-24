const burger = document.querySelector(".first-view__burger");
const navigation = document.querySelector(".navigation");

burger.addEventListener('click', () => {
	if (navigation.style.display === 'block') {
		navigation.style.animation = 'animationOut .5s easy-in-out forwards';
		setTimeout(() => {
			navigation.style.display = "none";
		},500)
	} else {
		navigation.style.display = 'block';
		navigation.style.animation = 'animation .5s easy-in-out forwards';
		burger.style.position = "absolute";
		burger.style.zIndex = "1000";
		
	}
})