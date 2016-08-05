	function responsive() 
			{
				this.ancho = $(window).outerWidth()
				var r =document.getElementsByClassName("row")[1]
				if (r && ancho<768){
					r.style.display = 'none';				
				}

				else{
					r.style.display = 'block';
				}			
			}

	$(window).load(function() {
		responsive();
		});			
window.addEventListener('resize', responsive);	
	poner_modal() 

$(document).on('click', '#ver', function(){
 $.fn.fullpage.moveTo('secondPage', 0);
 });

function poner_modal () {
	 var chichico= document.getElementsByClassName("chichico")
	 for (var i=0; i<chichico.length; i++) {
	 var modal= document.createElement("div");
	 	modal.innerHTML='<a class="play-button" href= "" type="button" data-toggle="modal" data-target=#'+[i]+'><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></a>'
	 	chichico[i].appendChild(modal)
	 }

}