$(document).ready(function(){
	const listItems = document.querySelectorAll('.list-item');
	const lists = document.querySelectorAll('.list');
	// const root = document.querySelector('.root');
	// const cards = document.querySelectorAll('.root .list-item');
	
	let draggedItem = null;
	let leave = null;
	for (let i = 0; i < listItems.length; i++) {
		const item = listItems[i];
	
		item.addEventListener('dragstart', function () {
			draggedItem = item;
			leave = this.parentNode;
			
			setTimeout(function () {
				item.style.display = 'none';
			}, 0)
		});
		
		item.addEventListener('dragend', function (e) {
			setTimeout(function () {
				draggedItem.style.display = 'block';
				draggedItem = null;
			}, 0);
		})
	
		for (let j = 0; j < lists.length; j ++) {
			const list = lists[j];
		
			list.addEventListener('dragover', function (e) {
				e.preventDefault();
			});
			
			list.addEventListener('dragenter', function (e) {
				e.preventDefault();
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
			});
	
			list.addEventListener('dragleave', function (e) {
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
			});
	
			list.addEventListener('drop', function (e) {
				this.append(draggedItem);
	
				if(this.children.length > 1 && !this.classList.contains('root')) {
					leave.append(this.firstElementChild);
				}
	
				this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
			});
		}
	}
	
	// for(let i = 0; i < cards.length; i++) {
	// 	const card = cards[i+1];
	// 	const number = i+1;
	// 	if(card){
	// 		card.style.left = `${number * 100}px`;
	// 	}
	// }
});