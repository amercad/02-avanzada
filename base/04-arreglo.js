const inmuebles = [
    {id: 1, nombre: 'EL VIP', calle: 'Cll 100'},
    {id: 2, nombre: 'PROVENZA', calle: 'Cll 80'},
    {id: 3, nombre: 'EL RAUDAR', calle: 'Cll 10'},
];

const findByName = inmuebles.find( inmueble => inmueble.nombre === 'PROVENZA');
const filterByName = inmuebles.filter( inmueble => inmueble.nombre === 'PROVENZA');

const someByName = inmuebles.some( inmueble => inmueble.nombre === 'PROVENZA');

console.log(findByName);
console.log(filterByName);
console.log(someByName);