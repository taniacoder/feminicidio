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
		get_modal()
	window.addEventListener('resize', responsive);	
	poner_modal() 
		});			

$(document).on('click', '#ver', function(){
 $.fn.fullpage.moveTo('secondPage', 0);
 });

function poner_modal () {
	 var chichico= document.getElementsByClassName("chichico")
	 for (var i=0; i<chichico.length; i++) {
	 var modal= document.createElement("div");
	 	modal.innerHTML='<a href= "" type="button" data-toggle="modal" data-target=#'+[i]+'><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></a>'
	 	chichico[i].appendChild(modal)
	 }
}

function get_modal(){
  var obtener_modal= document.getElementsByClassName("modal-body");
  var poner_redes = document.getElementsByClassName("modal-footer")
  for (var j=0; j<obtener_modal.length; j++){  		
	  switch(obtener_modal[j]) {
	    case obtener_modal[0]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[0].appendChild(video)	      
	      break;
	    case obtener_modal[1]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/XvKsDdQd3MY" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[1].appendChild(video)
	      break;
	    case obtener_modal[2]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[2].appendChild(video)
	      break;
	    case obtener_modal[3]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/XvKsDdQd3MY" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[3].appendChild(video)
	      break;
	    case obtener_modal[4]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/ogeOcqnSKQQ" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[4].appendChild(video)
	      break;
	    case obtener_modal[5]:
	    var video= document.createElement("div")
	      video.innerHTML= '<iframe width="100%" height="315" src="https://www.youtube.com/embed/XvKsDdQd3MY" frameborder="0" allowfullscreen></iframe>'
	      obtener_modal[5].appendChild(video)
	      break;
	  }
  }

  for (var k=0; k<poner_redes.length; k++){
  	var redes = document.createElement("div")
  	redes.innerHTML = '<button type="button" class="btn btn-default" data-dismiss="modal"><div class="redes-sociales"><!--Twitter--><a href="https://twitter.com/share" class="twitter-share-button">Tweet</a> <!--Twitter--><!--facebook--><div class="fb-like" data-href="https://taniacoder.github.io/feminicidio/static/#firstPage" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div><!--facebook--></div></button>'
  	poner_redes[k].appendChild(redes)
  }
  
}

