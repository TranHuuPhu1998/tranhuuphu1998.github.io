
$(document).ready(function() {
	loadInitHtml();

	const list1 = document.querySelector('.list1');
	const list2 = document.querySelector('.list2');
	const list3 = document.querySelector('.list3');
	const list4 = document.querySelector('.list4');
	const list5 = document.querySelector('.list5');
	const root = document.querySelector('.root');

	$(document).on('click', '.js-sure', onSaveData)

	$('.root').mousewheel(function(e, delta) {
		let _delta = 0;
		if(delta < 0) {
			_delta = delta - 100;
		}else {
			_delta = delta + 100;
		}
		this.scrollLeft -= _delta;
		e.preventDefault();
	});
	
	new Sortable(root, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
	});

	new Sortable(list1, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
		onAdd: function(evt){
			let from = evt.from;
			let to = evt.to;
			let item = evt.item;
			swapCard(from, to, item);
		}
	});
	new Sortable(list2, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
		onAdd: function(evt){
			let from = evt.from;
			let to = evt.to;
			let item = evt.item;
			swapCard(from, to, item);
		}
	});
	new Sortable(list3, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
		onAdd: function(evt){
			let from = evt.from;
			let to = evt.to;
			let item = evt.item;
			swapCard(from, to, item);
		}
	});
	new Sortable(list4, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
		onAdd: function(evt){
			let from = evt.from;
			let to = evt.to;
			let item = evt.item;
			swapCard(from, to, item);
		}
	});
	new Sortable(list5, {
		group: 'shared',
		animation: 150,
		ghostClass: 'drop-placeholder-class',
		onAdd: function(evt){
			let from = evt.from;
			let to = evt.to;
			let item = evt.item;
			swapCard(from, to, item);
		}
	});
	function swapCard(from,to,item){
		if(to.children.length > 1){
			Array.from(to.children).forEach(function(element){
				if(element.id != item.id){
					from.append(element);
				}
			});
		}
	}
	function onSaveData() {
		let content = document.getElementById("js-list").innerHTML;
		let images = document.querySelectorAll('.lists .img-card');
		let imagePath = [];
		Array.from(images).forEach(function(element){
			imagePath.push(element.src);
		});
		localStorage.setItem("images", JSON.stringify(imagePath));
		localStorage.setItem("lists", content);
		window.location.href = "input.html";
	}

	function loadInitHtml(){
		let content = localStorage.getItem("lists");
		if(content && document.getElementById("js-input-list")){
			document.getElementById("js-input-list").innerHTML = content;
		}
	}
});