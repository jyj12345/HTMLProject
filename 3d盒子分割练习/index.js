window.addEventListener('load', function () {
	var BoxContainer = document.getElementById("box_Container");
	var btn = document.getElementsByClassName('btn');

	// 箭头函数，缩减代码
	btn[0].addEventListener('click', () => BoxContainer.classList.toggle('big'))

	// 创建盒子
	function createBox() {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				const box = document.createElement('div');
				box.classList.add('box');
				box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
				BoxContainer.appendChild(box);
			}
		}
	}

	createBox();
})
