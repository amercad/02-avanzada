let estudiantes = [
    {nombre: 'Aandres', edad: 27, cedula: '1102871153'},
    {nombre: 'Lina', edad: 37, cedula: '1102871155'},
    {nombre: 'Julian', edad: 31, cedula: '1102871159'},
];

const mapa = estudiantes.map( function(estudiante) {
    estudiante.nota = 3.5;
    estudiante.edad -= 1;
    return estudiante;
});

console.log(mapa);