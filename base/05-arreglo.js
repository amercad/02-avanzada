const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


const numerosMayores = numeros.filter( numero => numero >= 50);
const mapa = numerosMayores.map( numerosMayore => numerosMayore - 10 );

const findDies = mapa.find( numero => numero === 40);

console.log(findDies);