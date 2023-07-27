console.log('********** 204 Console **********');

/* Apartado A */
console.log('Apartado A');

var a = 1;
let b = 2;

{
    try {
        console.log(a, b);
    } catch (error) { }
    let b = 3;
    console.log(a, b);
}

console.log(a, b);

() => {
    console.log(a);
    var a = 5;
    let b = 6;
    console.log(a, b);
};

console.log(a, b);

/* Respuesta

En consola saldrá: 
1 3
1 2
1 2

EL primer console.log corresponde al bloque de código justo después 
del catch. Coge el valor global de a y de b coge el valor de let b = 3 
ya que están en el mismo ámbito. El console.log dentro de try da error
pues se intenta acceder a b sin estar inicializada para ese bloque. Como
está dentro de un try and catch y no se ha puesto nada dentro de catch, no 
se muestra el error y permite seguir ejecutando el código.

El siguiente console.log de 1 2 devuelve esos valores pues coge los valores
goblales definidos en el mismo ámbito.

el bloque de código de abajo no se ejecuta pues no se hace llamada para ejecutar
la función, sólo está definida.

() => {
    console.log(a);
    var a = 5;
    let b = 6;
    console.log(a, b);
};

Y el último console.log vuelve a dar 1 2 pues como en el segundo, coge los valors
de var a = 1 y let b = 2 definidos e incializados de forma global.

*/

/* Apartado B */
console.log('Apartado B');

var a = 1;
let b1 = 2;

{
    let b1 = 3;
    try {
        console.log(a, b1);
    } catch (error) { console.log(error) }
    console.log(a, b1);
}

console.log(a, b1);

const fun = () => {
    var a = 5;
    console.log(a);
    let b1 = 6;
    console.log(a, b1);
};

fun();

console.log(a, b1);

/* Resultado en consola:

1 3
1 3
1 2
5
5 6
1 2

*/