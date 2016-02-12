var contador = 1;
var variable = 1;
var contenedorAncho;




(function(){

	//mostramos y ocultamos el menu
	$('.icon-menu').click(function(){

		$('.icon-chevron-thin-down').show();

		//$('nav').toggle();
		if(contador == 1) {
			$('.menu').animate({
				left: '0'
			});
			contador = 0;
		}else {
			contador = 1;
			$('.menu').animate({
				left: '-100%'
			});			
		}
	});

	//mostramos y ocultamos el icono de los menus	
	$('.submenu').click(function(){	
			if (variable == 1) {
				$('.icon-chevron-thin-down').hide();
				$('.icon-chevron-thin-up').show();
				$('#hijos').slideToggle();  /*despliega los menus*/
				variable = 0;
			}else{
				$('.icon-chevron-thin-up').hide();
				$('.icon-chevron-thin-down').show();
				$('#hijos').slideToggle();  /*despliega los menus*/
				variable = 1;	//document.writeln(tamaño); 
				}		
	});	

	function getAncho(){
		var ancho = window.innerWidth; //--->tamaño del ancho del navegador //window.screen.width---->tamaño del ancho de toda la pantalla del dispositivo;
		//var alto = window.innerHeight;
		contenedorAncho = ancho;

		if (contenedorAncho >= 960) {
			$('.icon-chevron-thin-down').hide();
			$('.icon-chevron-thin-up').hide();
			/*$('#hijos').removeClass('click');*/	
			/*JQuery$('#hijos').removeClass('slideToggle');*/
			$('#hijos').hover();
		}
	}

	window.addEventListener('resize', getAncho);

}());


