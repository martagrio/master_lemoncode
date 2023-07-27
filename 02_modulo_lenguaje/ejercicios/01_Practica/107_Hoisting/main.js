/* Apartado A */
console.log('Apartado A');

function f() {

    //Original
    /* console.log(a);
    console.log(g());

    var a = "good job!";
    function g() {
        return a;
    }
    console.log(a); */

    //Equivalente
    var a;

    function g() {
        return a;
    }

    console.log(a);
    console.log(g());

    a = "good job!";

    console.log(a);
}

f();

/* RESPUESTA

El resultado será: undefined, undefined y "good job!". 
Como "a" y la función g está declara dentro del scope de la función f, 
es como si estuvieran declaradas en la parte superior dentro de f, por lo que 
tanto en el primer console.log(a) como en el console.log(g()) mostrarán undefined, 
ya que "a" está declarada pero no inicializada. 
En el último console.log(a) ya mostrará "good job!" pues justo antes de él se ha 
inicializado "a" a ese valor */

/* Apartado B */
console.log('Apartado B');

//Original
/* var a = 1;

(function () {
    console.log(a);
    var a = 2;
    b = 4;
    var c = 3;
})();

console.log(a);
console.log(b);
console.log(c); */

//Equivalente
var a;
a = 1;

(function () {
    var a;
    var c;
    b = 4;
    console.log(a);
    a = 2;
    c = 3;
})();

console.log(a);
console.log(b);
console.log(c);

/* RESPUESTA

El resultado será: undefined, 1, 4 y el error "Uncaught ReferenceError: c is not defined". 

Se ejecuta primero la función y dado que "a" está definida dentro de su scope, pasa al principio y al hacer el console.log(a) sale undefined.

Luego se ejecuta el segundo console.log(a) al haber en ese scope un "a" definido e inicializado a 1, dará como resultado 1.

Al no estar como "strict" al declarar "b" sin indicar ni const, ni let ni var, pasa ser un atributo de del objeto window y es accesible y no dará error. Si estuvieramos en 'strict' daía un error de que no está declarada.

Por último al ejecutarse el console.log(c) dará el error "Uncaught ReferenceError: c is not defined" pues "c" no está ni definida al mismo scope. La que está dentro de la fución sólo sirve para ese mismo ámbito. */


/* Apartado C */
console.log('Apartado C');

//Original
/* f();
var a = 1;

function f() {
    console.log(a);
    b = 4;
    var c = 3;
} */

//Equivalente

var a;
a = 1;

function f() {
    var c;
    c = 3;
    b = 4;
    console.log(a)
}
f();
console.log(a);
console.log(b);
console.log(c);

/* RESPUESTA

El resultado será: 1, 1, 4 y el error "Uncaught ReferenceError: c is not defined". 

Se ejecuta primero la función y dado que "a" está definida de forma global (y no se vuelve a definir de forma local dentro de ese scope como en el ejemplo anterior), pasa al principio y al hacer el console.log(a) dentro de la función f se muestra el valor 1;

Luego se ejecuta el console.log(a) de depués de f y también como "a" es global, dará como resultado 1.

Al no estar como "strict" al declarar "b" sin indicar ni const, ni let ni var, pasa ser un atributo de del objeto window y es accesible y no dará error. Si estuvieramos en 'strict' daía un error de que no está declarada.

Por último al ejecutarse el console.log(c) dará el error "Uncaught ReferenceError: c is not defined" pues "c" no está ni definida al mismo scope. La que está dentro de la fución sólo sirve para ese mismo ámbito. */