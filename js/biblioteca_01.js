$( document ).ready(function() {
	const proxyurl = "https://cors-anywhere.herokuapp.com/";
	var canvas=document.getElementById('miCanvas');
	var ctx=canvas.getContext("2d");
 	$("#tec").click(function() {
		const url = "http://localhost/gps/save.php?opcion=tec";
		fetch(url)
		.then(response => response.text())
		.then(contents => dibujarLineas(ctx, contents))
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}),
	$("#O").click(function() {
		const url = "http://localhost/gps/save.php?opcion=ed";
		fetch(url)
		.then(response => response.text())
		.then(contents => dibujarLineasO(ctx, contents))
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	}),
	$("#Rasp").click(function() {
		const url = "http://localhost/gps/save.php?Rasp=ed";
		fetch(url)
		.then(response => response.text())
		.then(contents => dibujarTexto(ctx, contents))
		.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
	});
});

function dibujarTexto(ctx,contents){
	var xb=-101.187928;
	var yb=19.723911;
	var json=JSON.parse(contents);
	console.log(json['lon']);
	ctx.font="1em Verdana";
	ctx.lineWidth=1.0;
	ctx.fillStyle="blue";
	ctx.strokeStyle="yellow";
	x=((xb-json['lon'])*-120000)*2;
	y=((yb-json['lat'])*65000)*2;
	console.log(x);
	console.log(y);
	ctx.fillText("R",x,y);
	ctx.strokeText("R",x,y);
}

function dibujarLineas(ctx,content){
	var x=0;
	var y=0;
	var xb=-101.187928;
	var yb=19.723911;
	var json=JSON.parse(content);

	//Definición de colores
	ctx.fillStyle = "black";
	//Inicio de Trayectoria
	ctx.beginPath();
	ctx.moveTo(307.67999999909534*2, 0*2);
	//Dibujar líneas
	y=(yb-json['pSIy'])*65000;
	x=(xb-json['pSIx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pSDy'])*65000;
	x=(xb-json['pSDx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pIDy'])*65000;
	x=(xb-json['pIDx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pIIy'])*65000;
	x=(xb-json['pIIx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	//Definiendo un color
	ctx.fillStyle = "#ff0000";
	//Rellenando la figura
	ctx.fill();
}
function dibujarLineasO(ctx,content){
	var x=0;
	var y=0;
	var xb=-101.187928;
	var yb=19.723911;
	var json=JSON.parse(content);

	//Definición de colores
	ctx.fillStyle = "black";
	//Inicio de Trayectoria
	ctx.beginPath();
	ctx.moveTo(((xb-json['pSIx'])*-120000)*2, ((yb-json['pSIy'])*65000)*2);
	//Dibujar líneas
	y=(yb-json['pSIy'])*65000;
	x=(xb-json['pSIx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pSDy'])*65000;
	x=(xb-json['pSDx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pIDy'])*65000;
	x=(xb-json['pIDx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	y=(yb-json['pIIy'])*65000;
	x=(xb-json['pIIx'])*-120000;
	console.log("X="+x+" Y="+y);
	ctx.lineTo(x*2, y*2);
	//Definiendo un color
	ctx.fillStyle = "#000000";
	//Rellenando la figura
	ctx.fill();
}
