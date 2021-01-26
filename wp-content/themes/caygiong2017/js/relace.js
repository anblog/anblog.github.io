jQuery("document").ready(function($){

    $( ".content ul.product-list li .hover-zoom" ).hover(function( event ) {        
    	event.preventDefault();
    	var value = $(this).attr('data-img-full');
    	
    	$('.stickytooltip .img-zoom').attr('src', value);

    	var content = $( ".description-zoom", $(this) ).html();
		//document.getElementById('description').innerHTML  =  content  ;
	});

	$('.promoteslider ul.product-list li .hover-zoom').attr('data-img-full', '');
	$('.promoteslider ul.product-list li .hover-zoom').attr('data-tooltip', '');
});