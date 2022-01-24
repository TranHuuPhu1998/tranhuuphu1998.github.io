
$(document).ready(function() {
	loadInitHtml();

	function loadInitHtml(){
		let content = localStorage.getItem("lists");
		if(content && document.getElementById("js-input-list")){
			document.getElementById("js-input-list").innerHTML = content;
		}
	}
});

window.onload = function () {
	document.getElementById("download-pdf")
			.addEventListener("click", (e) => {
					e.preventDefault();
					let element = localStorage.getItem("images");
					let images = JSON.parse(element);
					let src= '';
					src += '<div style="display: flex;margin:0 auto;justify-content: space-between;"> ';
					images?.forEach(function(path) {
						console.log(path);
						src += `<div style="
										display: flex;
										flex-flow: column;
										min-height: 300px;
										width: calc((100% / 5));
										border: 2px solid #fff;
										border-radius: 10px;
										">
											<div style="
												border-radius: 8px;
												width: 100%;
												height: 100%;
												">
												<img style="
													width: 100%;
													height: 200px;
													object-fit: cover;	
												" 
												src="${path}">
											</div>
										</div>`;
					})
					src += '</div>';
					var opt = {
						margin: 1,
						filename: 'game-success.pdf',
						image: { 
							type: 'jpeg', 
							quality: 0.98 
						},
						html2canvas: { 
							scale: 1
						},
						jsPDF: { 
							unit: 'in', 
							format: 'letter', 
							orientation: 'portrait' 
						}
					};
					if(src){
						html2pdf().from(src).set(opt).save();
					}
			})
}