//variables
var clicks = 0;
var inventario = [0, 0, 0, 0, 0, 0];
var clicksProduce = [1, 2, 4, 10, 20, 40];
var precioProducto = [100, 200, 400, 600, 1000, 1600, 50000];

//acctions

let clic = () => clicks++;

let suicide = () => {
    if(localStorage.getItem('rescue') === null) {
        localStorage.setItem('rescue',1);
    } else {
        localStorage.setItem('rescue', parseInt(localStorage.getItem('rescue')) + 1);
    }
    var count = localStorage.getItem('rescue');
    alert("¡ESTÁS MUERTO!" + " - Esta es la "+ count + "ª vez que mueres.");
    location.reload();
}

let comprar = (objeto) => {
    if (clicks >= precioProducto[objeto] && objeto != 6) {
        inventario[objeto]++;
        clicks -= precioProducto[objeto];
    }else if(clicks >= precioProducto[objeto] && objeto == 6){
        clicks -= precioProducto[6];
        hiddenSquare2();
    }else {
        console.log("NO TIENES SUFICIENTE DINERO");
    }
}

let producir = () => {
    for (contador = 0; contador < inventario.length; contador++) {
        clicks += inventario[contador] * clicksProduce[contador];
    }
}

let render = () => {
    document.getElementById("contador").innerHTML = clicks;
    document.getElementById("inventario").innerHTML =
        `Cursores: ${inventario[0]}<br>
    Power x2: ${inventario[1]}<br>
    Power x10: ${inventario[2]}<br>
    Power x50: ${inventario[3]}<br>
    Power x100: ${inventario[4]}<br>
    Power x160: ${inventario[5]}`;
}

let hiddenSquare2 = () =>{
    var noHidden = document.getElementById('square2');
    var noButton = document.getElementById('newSq');
    noHidden.style.display = 'inline';
    noButton.disabled = true;
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
