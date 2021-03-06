$(document).ready(function() {
			$('#fullpage').fullpage({
				sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
				anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				sectionsColor: ['#3D3D3D', '#FFFFFF'],
				scrollOverflow: true,
				scrollOverflowOptions: {
					scrollbars: true,
			        mouseWheel: true,
			        hideScrollbars: false,
			        fadeScrollbars: false,
			        disableMouse: true
			        }				
			});
		});

$(".modal-transparent").on('show.bs.modal', function () {
  setTimeout( function() {
    $(".modal-backdrop").addClass("modal-backdrop-transparent");
  }, 0);
});
$(".modal-transparent").on('hidden.bs.modal', function () {
  $(".modal-backdrop").addClass("modal-backdrop-transparent");
});
