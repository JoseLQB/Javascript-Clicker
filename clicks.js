//variables
var clicks = 0;
var inventario = [0, 0, 0, 0, 0, 0];
var clicksProduce = [1, 2, 4, 10, 20, 40];
var precioProducto = [100, 200, 400, 600, 1000, 1600];

//acciones
function clic() {
    clicks++;
}
function suicide() {
    alert("¡ESTÁS MUERTO!");
    location.reload();
}
function comprar(objeto) {
    if (clicks >= precioProducto[objeto]) {
        inventario[objeto]++;
        clicks -= precioProducto[objeto];
    }
    else {
        console.log("NO TIENES SUFICIENTE DINERO");
    }
}
function producir() {
    for (contador = 0; contador < inventario.length; contador++) {
        clicks += inventario[contador] * clicksProduce[contador];
    }
}
function render() {
    document.getElementById("contador").innerHTML = clicks;
    document.getElementById("inventario").innerHTML =
        `Cursores: ${inventario[0]}<br>
    Power x2: ${inventario[1]}<br>
    Power x10: ${inventario[2]}<br>
    Power x50: ${inventario[3]}<br>
    Power x100: ${inventario[4]}<br>
    Power x160: ${inventario[5]}`;
}

//refresco de pantalla
var FPSProduce = 1;
setInterval(function () {
    producir();
}, 1000 / FPSProduce);
var FPS = 30;
setInterval(function () {
    render();
}, 1000 / FPS);
