const numeros = [1,2,3,4,5,6,7,8,9,10];
const nombres = Array('Andres', 'Lina', 'Julian');

const numerosMayoresTradicional = numeros.filter( function(numero) {
    return numero > 5   
});

const numerosMayores = numeros.filter( numero => numero > 5 );

console.log(numerosMayoresTradicional);
console.log(numerosMayores);