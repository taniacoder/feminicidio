$(window).load(function() {
responsive();
window.addEventListener('resize', responsive);
	function responsive() 
			{
				var ancho = $(window).outerWidth()
			    var e=document.getElementsByClassName("row")[1]
			    if (e.style.display == 'block' )
			    {
			        e.style.display = 'none';
			    }
			   if (e.style.display = 'none' && ancho > 767)
			    {
			        e.style.display = 'block';
			    }
			}
})

$(document).on('click', '#ver', function(){
 $.fn.fullpage.moveTo('secondPage', 0);
 });
