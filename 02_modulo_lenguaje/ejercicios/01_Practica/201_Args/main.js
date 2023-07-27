function f(a, { b } = {}, c = 100) {

    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
}

/* Apartado A */
console.log('Apartado A');

f("JS rocks!", { b: "b" });

/* Respuesta

    - console.log(arguments.length) mostrará un 2 indicando el nº de argumentos
    pasados (a y b).

    -console.log(a, a === arguments[0]) mostrará que "JS rocks!" y true porque 
    coinciden que son el mismo valor. A se ha pasado y existe en arguments.

    - console.log(b, b === arguments[1]) mostrará b y false, porque el segundo 
    argumento pasado es un objeto con una propiedad llamada b y valor b y b como 
    tal es el valor en sí (b);

    - console.log(c, c === arguments[2]) mostrará 100 y false, pues como no se pasa 
    tercer valor por defecto se asigna a c un valor de 100 y el tercer argumento como 
    no se ha pasado es undefined en el array-like arguments.
*/

/* Apartado B */
console.log('Apartado B');

f({ b: "b" });
/* Respuesta

    - console.log(arguments.length) mostrará un 1 indicando el nº de argumentos
    pasados (sólo uno).

    - console.log(a, a === arguments[0]) mostrará que {b: 'b'} que es lo que se ha 
    pasado como el argumento a y verdadero porque coinciden que son el mismo valor.
    
    - console.log(b, b === arguments[1]) mostrará undefined y true, porque no se ha 
    pasado segundo argumento por lo que b es undefined y no hay posición [1] en arguments 
    por lo que también es undefined y al comparar da true.

    - console.log(c, c === arguments[2]) mostrará 100 y false, pues como no se pasa tercer 
    valor por defecto se asigna a c un valor de 100 y el tercer argumento como no se ha 
    pasado es undefined en el array-like arguments.
*/

/* Apartado C */
console.log('Apartado C');

f("JS sucks!", null, 13);
/* Respuesta

    Al ejecutar da el error "Uncaught TypeError: Cannot destructure property 'b' of '(intermediate value)(intermediate value)(intermediate value)' as it is null." Esto pasa porque se ha pasado como segundo parámetro el valor null y se
    difinió como { b } por lo que para obtener el valor de b hace destructuring y da fallo porque no se puede hacer con
    valor null, ya que el valor default {} sólo vale para valores undefined.

*/
