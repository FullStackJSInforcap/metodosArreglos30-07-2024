let numeros = [1, 3, 5, 7, 17, 25, 100, -3];
numeros.push(-6);
numeros.push(-90);
numeros.push(1);
console.log(numeros);
numeros.pop();
console.log(numeros);
numeros.forEach(function(numero){
    console.log(numero);
});
// calcular el doble de todos los numeros del arreglo "numeros"
let numeroAlDoble = numeros.map(function(numero){
    return numero * 2;
});
console.log(numeroAlDoble);

let numerosPositivos = numeros.filter(function(numero){
    return numero > 0;
});
console.log(numerosPositivos);