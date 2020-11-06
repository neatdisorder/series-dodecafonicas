// Declaración de variables

var totalCromatico = ["DO", "DO#", "RE", "RE#", "MI", "FA", "FA#", "SOL", "SOL#", "LA", "LA#", "SI"];

// Función onclick para generar series

function generarSeries() {

    console.clear();
    var serieResultado = [];
    var serieRetrogradada = [];
    var serieInvertida = [];
    var serieInvertidaRetrogradada = [];

    // Chequeo del total cromático

    console.log("El total cromático es: " + totalCromatico);

    // Declaración de variables
    
    // Generación de serie original.

    for (i = 0; i < totalCromatico.length; i++) {

    var z = Math.floor(Math.random() * Math.floor(totalCromatico.length));

    /* console.log("El número al azar es: " + z);
    console.log("La nota al azar es: " + totalCromatico[z]); */

        if (serieResultado.includes(totalCromatico[z])) {
            i--;
        } else {
            serieResultado.push(totalCromatico[z]);
        }

    }

    console.log("La serie dodecafónica es: " + serieResultado);

    // Generación de serie retrogradada.

    for (j = 11; j >= 0; j--) {
        serieRetrogradada.push(serieResultado[j]);
    }

    // console.log("La serie retrogradada es: " + serieRetrogradada);

    // Generación de serie invertida.

    serieInvertida.push(serieResultado[0]);
    console.log("La primera nota de la serie invertida es: " + serieInvertida[0]);
    
    for (k = 0; k < 11; k++) {
        
        // Calcula la distancia interválica en la serie original.
        console.log("// COMIENZO DE ITERACIÓN " + k + " //");

        var p = 1;

        var valorIntervaloUno = totalCromatico.indexOf(serieResultado[k]);
        
        console.log("La posición de la primera nota a comparar de la serie es: " + valorIntervaloUno);
        
        var valorIntervaloDos = totalCromatico.indexOf(serieResultado[(k + p)]);
        
        console.log("La posición de la segunda nota a comparar de la serie es: " + valorIntervaloDos);

        var distanciaIntervalica = valorIntervaloUno - valorIntervaloDos;
        
        if (distanciaIntervalica < 0) {
            distanciaIntervalica = -distanciaIntervalica;
        }

        console.log("La distancia interválica es: " + distanciaIntervalica);

        // Calcula la posición de la nueva nota.

        console.log("La nota de la serie invertida en posición " + k + " es " + serieInvertida[k]);

        if (valorIntervaloUno > valorIntervaloDos) {
            var indexNotaInversion = totalCromatico.indexOf(serieInvertida[k]) + distanciaIntervalica;
                if (indexNotaInversion < 0) {
                    indexNotaInversion = -indexNotaInversion;
                    indexNotaInversion = 12 - indexNotaInversion;
                } else if (indexNotaInversion == 12) {
                    indexNotaInversion = 0;
                } else if (indexNotaInversion > 11) {
                    indexNotaInversion = 0 + (indexNotaInversion - 12);
                }
        } else if (valorIntervaloUno < valorIntervaloDos) {
            var indexNotaInversion = totalCromatico.indexOf(serieInvertida[k]) - distanciaIntervalica;
                if (indexNotaInversion > 11) {
                    indexNotaInversion = 0 + (indexNotaInversion - 12);
                } else if (indexNotaInversion < 0) {
                    indexNotaInversion = -indexNotaInversion;
                    indexNotaInversion = 12 - indexNotaInversion;
                } else if (indexNotaInversion == 12) {
                    indexNotaInversion = 0;
                }
            
        }

        console.log("La posición cromática de la nueva nota es: " + indexNotaInversion);

        // Elige la nueva nota con la posición deducida.

        nuevaNotaInversion = totalCromatico[indexNotaInversion];

        console.log("La nueva nota a ingresar en la serie es: " +  nuevaNotaInversion);

        serieInvertida.push(totalCromatico[indexNotaInversion]);

        p++;

    }

    console.log("La serie invertida es: " + serieInvertida);    

    // Generación de serie retrogradada.

    for (h = 11; h >= 0; h--) {
        serieInvertidaRetrogradada.push(serieInvertida[h]);
    }

    console.log("La serie invertida retrogradada es: " + serieInvertidaRetrogradada);

    // Conversión a strings.

    var mostrarResultado = serieResultado.join(" - ");
    var mostrarRetrogradada = serieRetrogradada.join(" - ");
    var mostrarInvertida = serieInvertida.join(" - ");
    var mostrarInvertidaRetrogradada = serieInvertidaRetrogradada.join(" - ");

    // Impresión de resultados.

    document.getElementById("serieResultadoJS").className = "visible";
    document.getElementById("serieResultadoJS").innerHTML = mostrarResultado;
    document.getElementById("serieRetrogradadaJS").className = "visible";
    document.getElementById("serieRetrogradadaJS").innerHTML = mostrarRetrogradada;
    document.getElementById("serieInvertidaJS").className = "visible";
    document.getElementById("serieInvertidaJS").innerHTML = mostrarInvertida;
    document.getElementById("serieInvertidaRetrogradadaJS").className = "visible";
    document.getElementById("serieInvertidaRetrogradadaJS").innerHTML = mostrarInvertidaRetrogradada;
    // document.getElementById("boton").innerHTML = "¡Actualizá la página para empezar de nuevo!";
}

// Reproducción de series.

function reproduccionSerieResultado() {
    let serie = document.getElementById("serieResultadoJS").innerText;
    console.log(serie);
    let arrSerie = serie.split(' - ');
    console.log(arrSerie);
    reproducirSerie(arrSerie);
}

function reproduccionSerieRetrogradada() {
    let serie = document.getElementById("serieRetrogradadaJS").innerText;
    console.log(serie);
    let arrSerie = serie.split(' - ');
    console.log(arrSerie);
    reproducirSerie(arrSerie);
}

function reproduccionSerieInvertida() {
    let serie = document.getElementById("serieInvertidaJS").innerText;
    console.log(serie);
    let arrSerie = serie.split(' - ');
    console.log(arrSerie);
    reproducirSerie(arrSerie);
}

function reproduccionSerieInvertidaRetrogradada() {
    let serie = document.getElementById("serieInvertidaRetrogradadaJS").innerText;
    console.log(serie);
    let arrSerie = serie.split(' - ');
    console.log(arrSerie);
    reproducirSerie(arrSerie);
}

function reproducirSerie(arr) {

    elegirNota(arr[0]).play();

    setTimeout(() => {
        elegirNota(arr[1]).play();
    }, 750);

    setTimeout(() => {
        elegirNota(arr[2]).play();
    }, 1500);

    setTimeout(() => {
        elegirNota(arr[3]).play();
    }, 2250);

    setTimeout(() => {
        elegirNota(arr[4]).play();
    }, 3000);

    setTimeout(() => {
        elegirNota(arr[5]).play();
    }, 3750);

    setTimeout(() => {
        elegirNota(arr[6]).play();
    }, 4500);

    setTimeout(() => {
        elegirNota(arr[7]).play();
    }, 5250);

    setTimeout(() => {
        elegirNota(arr[8]).play();
    }, 6000);

    setTimeout(() => {
        elegirNota(arr[9]).play();
    }, 6750);

    setTimeout(() => {
        elegirNota(arr[10]).play();
    }, 7500);

    setTimeout(() => {
        elegirNota(arr[11]).play();
    }, 8250);

}

function elegirNota(value) {
    let x;
    switch(value) {
        case "DO":
            return document.getElementById("reproducirC");
        case "DO#":
            return document.getElementById("reproducirCsos");
        case "RE":
            return document.getElementById("reproducirD");
        case "RE#":
            return document.getElementById("reproducirDsos");
        case "MI":
            return document.getElementById("reproducirE");
        case "FA":
            return document.getElementById("reproducirF");
        case "FA#":
            return document.getElementById("reproducirFsos");
        case "SOL":
            return document.getElementById("reproducirG");
        case "SOL#":
            return document.getElementById("reproducirGsos");
        case "LA":
            return document.getElementById("reproducirA");
        case "LA#":
            return document.getElementById("reproducirAsos");
        case "SI":
            return document.getElementById("reproducirB");
        }
}


// function reproducirNota(array, j) {
//     setTimeout(() => {
//         var x;
//         switch(array[j]) {
//             case "DO":
//                 x = document.getElementById("reproducirC");
//                 break;
//             case "DO#":
//                 x = document.getElementById("reproducirCsos");
//                 break;
//             case "RE":
//                 x = document.getElementById("reproducirD");
//                 break;
//             case "RE#":
//                 x = document.getElementById("reproducirDsos");
//                 break;
//             case "MI":
//                 x = document.getElementById("reproducirE");
//                 break;
//             case "FA":
//                 x = document.getElementById("reproducirF");
//                 break;
//             case "FA#":
//                 x = document.getElementById("reproducirFsos");
//                 break;
//             case "SOL":
//                 x = document.getElementById("reproducirG");
//                 break;
//             case "SOL#":
//                 x = document.getElementById("reproducirGsos");
//                 break;
//             case "LA":
//                 x = document.getElementById("reproducirA");
//                 break;
//             case "LA#":
//                 x = document.getElementById("reproducirAsos");
//                 break;
//             case "SI":
//                 x = document.getElementById("reproducirB");
//                 break;
//             }
//         x.play(); 
//         console.log(x);
//         console.log(array[i]);
//         console.log(i);
//     }, 2000);
// }