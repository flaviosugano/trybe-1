window.onload = function (){

	let textColor = document.querySelector('#textColor');

	addColor(['white', 'pink', 'blue']);

	function addColor(color) {
		let divColor = document.querySelector('#textColor');
		for (let i in color){
			let cor = createColor(color[i]);
			divColor.appendChild(cor);
		}
	}

	function createColor(color) {
	let newColor = document.createElement('div');
	newColor.style.backgroundColor = color;
	newColor.className = 'color';
	return newColor;
	}

	addBgColor(['green', 'yellow', 'brown']);

	function addBgColor(bgColor){
		let background = document.querySelector('#bgColor');
		for (let i in bgColor){
			let newBg = createBgColor(bgColor[i]);
			background.appendChild(newBg);
		}
		
	}

	function createBgColor(bgColor){
		let background = document.createElement('div');
		background.style.background = bgColor;
		background.className = 'color';
		return background;
	}

	

// 	function handlePalletItemEvent(event){
// 		let oldSelectedDiv = document.querySelector('.selected');
// 		let currentSelectedDiv = event.target;
// 		let backgroundColor = currentSelectedDiv.style.backgroundColor;
// 		console.log(backgroundColor);

// 		oldSelectedDiv.classList.remove('selected');
// 		currentSelectedDiv.classList.add('selected');
		
// 		selectedColor = backgroundColor;     
// }
}



