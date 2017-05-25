$(document).on("ready",main);
console.log("Estoy en afuera del main");

function main () {
	console.log("Estoy en main");
	$("body").append("<div id='previewSlideshow'><div id='imagen'><img src='' width='430'height='300'/><div id='descripcion'></div><div id='cerrar'>Cerrar</div></div></div>");
	$("#slideshow img").on("click",abrirImagen);
	$("#previewSlideshow #cerrar").on("click",cerrarImagen);
}

function abrirImagen () {
	console.log("Estoy en abrirImagen");
	$("#previewSlideshow").fadeIn(500);
	$("#previewSlideshow img").attr("src","img/razas/dog"+($(this).index()+1)+".jpg");
	$("#previewSlideshow #descripcion").text($(this).attr("title"));
}

function cerrarImagen () {
	console.log("Estoy en cerrarImagen");
	$("#previewSlideshow").fadeOut(500);
}