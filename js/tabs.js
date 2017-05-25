var tabInicial=1;
console.log("ESTOY EN MAIN");
$(document).on("ready",main);


function main () {
	console.log("ESTOY EN MAIN");
	$("#tabs a").on("click",abrirTab);
	$(".tabContent").eq(tabInicial-1).fadeIn();
	$("#tabs a").eq(tabInicial-1).addClass("tabActual");
}

function abrirTab () {
	console.log("ESTOY EN ABRIRTAB");
	$(".tabContent").hide();
	$("#tabs a").removeClass("tabActual");
	console.log("ESTOY QUITANDO CLASE");
	$(".tabContent").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	return false;
}