const divs = document.querySelectorAll('.container div');

const colors = ["red", "yellow", "lime", "blue", "purple"];

let count = 0;

setInterval(() => {
	for (let i = 0; i < divs.length; i++) {
		const div = divs[i];
		const index = (i + count) % colors.length;
		div.style.backgroundColor = colors[index];
	}
	count++;
}, 500);




