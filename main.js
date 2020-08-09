let pintas = ["pica", "corazones", "diamantes", "trebol"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let nCartas = document.getElementById("numeroCartas");
let dibujar = document.getElementById("dibujar");
let cartasGeneradas = document.getElementById("cartasGeneradas");
let pasosOrdenamiento = document.getElementById("pasosOrdenamiento");
let ordenar = document.getElementById("ordenar");


let arrayCartasGeneradas = [];


function dibujarCartas(e) {  //Me crea las cartas 
    cartasGeneradas.innerHTML = ""
    arrayCartasGeneradas = []
    for (let i = 0; i < nCartas.value; i++) {
        let carta = document.createElement("div");
        carta.classList.add("carta");
        let pinta = document.createElement("div");
        pinta.classList.add("number");
        let p = Math.floor(Math.random() * 4);
        pinta.classList.add(pintas[p]);
        let n = Math.floor(Math.random() * 13);
        if (n === 10) {
            pinta.innerHTML = "J";
        } else if (n === 0) {
            pinta.innerHTML = "A"
        } else if (n === 11) {
            pinta.innerHTML = "Q";
        } else if (n === 12) {
            pinta.innerHTML = "K"
        } else {
            pinta.innerHTML = numeros[n];
        }
        carta.appendChild(pinta);
        cartasGeneradas.appendChild(carta);
        let objeto = { "numero": numeros[n], "pinta": pintas[p] }
        arrayCartasGeneradas.push(objeto)
        console.log(arrayCartasGeneradas.length)
    }
}

function mySort(e) {
    pasosOrdenamiento.innerHTML = ""
    let wall = arrayCartasGeneradas.length - 1;
    let contador = 0;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            contador++;
            if (arrayCartasGeneradas[index].numero > arrayCartasGeneradas[index + 1].numero) {
                let aux = arrayCartasGeneradas[index].numero;
                let aux2 = arrayCartasGeneradas[index].pinta;
                arrayCartasGeneradas[index].numero = arrayCartasGeneradas[index + 1].numero;
                arrayCartasGeneradas[index].pinta = arrayCartasGeneradas[index + 1].pinta;
                arrayCartasGeneradas[index + 1].numero = aux;
                arrayCartasGeneradas[index + 1].pinta = aux2;
            }
            let paso = document.createElement("div");
            let elemContador = document.createElement("span");
            elemContador.classList.add("x" + contador)
            elemContador.innerHTML = contador;
            paso.appendChild(elemContador);
            for (let i = 0; i < arrayCartasGeneradas.length; i++) {
                let ncarta = document.createElement("div");
                ncarta.classList.add("carta");
                let interiorCarta = document.createElement("div");
                interiorCarta.classList.add("number");
                interiorCarta.classList.add(arrayCartasGeneradas[i].pinta);
                if (arrayCartasGeneradas[i].numero === 11) {
                    interiorCarta.innerHTML = "J";
                } else if (arrayCartasGeneradas[i].numero === 1) {
                    interiorCarta.innerHTML = "A"
                } else if (arrayCartasGeneradas[i].numero === 12) {
                    interiorCarta.innerHTML = "Q";
                } else if (arrayCartasGeneradas[i].numero === 13) {
                    interiorCarta.innerHTML = "K"
                } else {
                    interiorCarta.innerHTML = arrayCartasGeneradas[i].numero;
                }
                ncarta.appendChild(interiorCarta);
                paso.appendChild(ncarta)
                pasosOrdenamiento.appendChild(paso)
            }
            index++
        }
        wall--;
    }
    return arrayCartasGeneradas;
};


dibujar.addEventListener("click", dibujarCartas)
ordenar.addEventListener("click", mySort)
