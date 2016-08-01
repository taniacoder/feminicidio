	function responsive() 
			{
				this.ancho = $(window).outerWidth()
				var r=document.getElementsByClassName("row")[1]
				if (r && ancho<767){
					r.remove();				
				}
			}
	function col_xs (ancho) {
		 var e =document.getElementsByClassName("row")[0]
		 if (e && ancho<767){
		 	var col= document.createElement("div");
		 	col.innerHTML= '<div class="col-xs-6 col-sm-3"><div class="chichico v-center"><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></div></div><div class="col-xs-6 col-sm-3"><div class="chichico v-center"><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></div></div><div class="col-xs-6 col-sm-3"><div class="chichico v-center"><i class="fa fa-play-circle-o fa-5x" aria-hidden="true"></i></div></div>'
			e.appendChild(col);
		 }

		var appended = false;
		if (!appended) {
			appended = true;
		}
$(window).load(function() {
	$(window).resize(function() {
responsive();
col_xs(ancho);
})
	})

$(document).on('click', '#ver', function(){
 $.fn.fullpage.moveTo('secondPage', 0);
 });

(function ($) {

	})(jQuery)