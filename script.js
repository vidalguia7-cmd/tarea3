// ==========================================
// EJERCICIOS DE PROGRAMACIÓN
// ==========================================

console.log("--- EJERCICIO 4: FizzBuzz ---");
function ejercicio4() {
    let limite = parseInt(prompt("Ejercicio 4: Ingrese un número límite:"));
    if (isNaN(limite)) return;

    for (let i = 1; i <= limite; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
// Descomentar para ejecutar automáticamente:
// ejercicio4();


console.log("--- EJERCICIO 5: Números Pares ---");
function ejercicio5() {
    let limite = parseInt(prompt("Ejercicio 5: Ingrese un número límite:"));
    if (isNaN(limite)) return;

    let contadorPares = 0;
    console.log(`Números pares desde 1 hasta ${limite}:`);
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
            contadorPares++;
        }
    }
    console.log(`Cantidad total de números pares encontrados: ${contadorPares}`);
}
// ejercicio5();


console.log("--- EJERCICIO 6: Número Primo ---");
function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function ejercicio6() {
    let num = parseInt(prompt("Ejercicio 6: Ingrese un número para verificar si es primo:"));
    if (isNaN(num)) return;

    if (esPrimo(num)) {
        console.log(`El número ${num} es primo.`);
    } else {
        console.log(`El número ${num} NO es primo.`);
    }
}
// ejercicio6();


console.log("--- EJERCICIO 7: Números entre dos valores ---");
function ejercicio7() {
    let num1 = parseInt(prompt("Ejercicio 7: Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ejercicio 7: Ingrese el segundo número:"));
    if (isNaN(num1) || isNaN(num2)) return;

    let inicio = Math.min(num1, num2);
    let fin = Math.max(num1, num2);

    console.log(`Números comprendidos entre ${inicio} y ${fin}:`);
    let i = inicio;
    while (i <= fin) {
        console.log(i);
        i++;
    }
}
// ejercicio7();


console.log("--- EJERCICIO 8: Contar Vocales ---");
function contarVocales(texto) {
    if (!texto) return 0;
    let contador = 0;
    let vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";

    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i])) {
            contador++;
        }
    }
    return contador;
}

function ejercicio8() {
    let cadena = prompt("Ejercicio 8: Ingrese una cadena de texto:");
    if (cadena !== null) {
        let totalVocales = contarVocales(cadena);
        console.log(`La cadena "${cadena}" contiene ${totalVocales} vocales.`);
    }
}
// ejercicio8();


console.log("--- EJERCICIO 9: Número Mayor en un Arreglo ---");
function obtenerMayor(arreglo) {
    if (arreglo.length === 0) return null;
    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}

function ejercicio9() {
    let numeros = [15, 42, 8, 99, 23, 4, 71];
    console.log("Arreglo de entrada:", numeros);
    let mayor = obtenerMayor(numeros);
    console.log(`El número mayor del arreglo es: ${mayor}`);
}
ejercicio9();


console.log("--- EJERCICIO 10: Calculadora Básica ---");
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) { 
    return b !== 0 ? a / b : "Error: No se puede dividir entre cero"; 
}

function ejercicio10() {
    let a = parseFloat(prompt("Ejercicio 10: Ingrese el primer número:"));
    let b = parseFloat(prompt("Ejercicio 10: Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación a realizar (sumar, restar, multiplicar, dividir):").toLowerCase();

    let resultado;
    if (operacion === "sumar" || operacion === "+") {
        resultado = sumar(a, b);
    } else if (operacion === "restar" || operacion === "-") {
        resultado = restar(a, b);
    } else if (operacion === "multiplicar" || operacion === "*") {
        resultado = multiplicar(a, b);
    } else if (operacion === "dividir" || operacion === "/") {
        resultado = dividir(a, b);
    } else {
        resultado = "Operación no válida.";
    }

    console.log(`Resultado de ${operacion} ${a} y ${b}:`, resultado);
}
// ejercicio10();