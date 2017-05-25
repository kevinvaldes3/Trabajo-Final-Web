$(document).on("ready",main);

function main () {
	$("#menu a").on("click",irA);
	$(window).scroll(scrollMenu);
}

function irA () {
	var seccion=$(this).attr("href");
	$("body,html").animate({
		scrollTop:$(seccion).offset().top -150
	},500);
	return false;
}

function scrollMenu () {
	var secciones=[$("#inicio").offset().top,$("#servicios").offset().top,$("#trabajo").offset().top,$("#faq").offset().top,$("#contacto").offset().top,$("body").height()];

	if ($(this).scrollTop()>secciones[1]-160 && $(this).scrollTop()<secciones[2]-160) 
	{
		$("#menu a").eq(0).addClass("seleccionado");
	}else{
		$("#menu a").eq(0).removeClass("seleccionado");
	}

	if ($(this).scrollTop()>secciones[2]-160 && $(this).scrollTop()<secciones[3]-160) 
	{
		$("#menu a").eq(1).addClass("seleccionado");
	}else{
		$("#menu a").eq(1).removeClass("seleccionado");
	}

	if ($(this).scrollTop()>secciones[3]-160 && $(this).scrollTop()<secciones[4]-160) 
	{
		$("#menu a").eq(3).addClass("seleccionado");
	}else{
		$("#menu a").eq(3).removeClass("seleccionado");
	}

	if ($(this).scrollTop()>secciones[4]-160 && $(this).scrollTop()<secciones[5]-160) 
	{
		$("#menu a").eq(4).addClass("seleccionado");
	}else{
		$("#menu a").eq(4).removeClass("seleccionado");
	}	
}