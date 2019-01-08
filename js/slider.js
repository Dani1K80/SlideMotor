var posicion = 0;

$( document ).ready(function() {
    

    cargarimagenes();
    
   	$('.left').on('click', function(e){
		e.preventDefault();
		// llamamos a la funcion que hace que se mueva el slider
		moverSlider('left');
	})

	$('.right').on('click', function(e){
		e.preventDefault();
		// llamamos a la funcion que hace que se mueva el slider
		moverSlider('right');
	})

});


function cargarimagenes(){

	console.log('entrar en funcion')
	// cargar las imagenes utilizando el data
	$('.blockSlide .slide').each(function(index, el) {


		 $(el).css({

		 	'background-image' : "url(" + $(el).data("img") + ")" ,
		 	'height': ($('.blockSlide').width() * 0.35 ) + 'px',
		 	'width' : ($('.blockSlide').width())+ 'px'
		});
		
	});
}


function moverSlider(direccion){

	// tenemos que saber el valor de todos los slides que tenemos
	var limite = 	$('.blockSlide .slide').length;
	// utilizamos el parametro del boton pulsado para aumentar o disminuir la posicion del slide
	posicion = (direccion =='right') ? posicion + 1 : posicion -1;
	//ponemos limites a la posicion del slide
	posicion = (posicion >= limite) ? 0 : posicion;
	posicion = (posicion < 0) ? limite -1 : posicion;

	var valor= -(posicion * $('.containerSlider').width())+'px';

	console.log(valor);
	//hacemos una animacion

	$('.containerSlider .blockSlide').animate({

		'margin-left' : - (posicion * $('.containerSlider').width())+'px',



	})

	console.log(posicion);
}

