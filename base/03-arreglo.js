const equipos = [
    {nombre: 'Atretico Nacional', titulo: 3},
    {nombre: 'Deportivo Indep Medellin', titulo: 1},
    {nombre: 'Junior de Barranquilla', titulo: 1}
];

let totalTitulo = 0;
equipos.forEach( equipo => {
    totalTitulo += equipo.titulo;
});
console.log({totalTitulo});