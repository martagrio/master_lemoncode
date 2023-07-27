console.log('************** Understanding JS **************');

console.log('************** Cuestión 1 **************');

let x: any = NaN;

console.log('Cuestión 1', x === x); // false

console.log('************** Cuestión 2 **************');

const isNaNValue = (v: any): boolean => { return isNaN(v) };

const isNaNValue2 = (v: any): boolean => { return Number.isNaN(v) };

//Si no se quiere que castee el valor del parámetro pasado, ejemplo, poner "12" y que lo castee a 12, se debe usar Number.isNaN(v);

console.log('Cuestión 2', isNaNValue(NaN)); // true
console.log('Cuestión 2', isNaNValue2(NaN)); // true

console.log('************** Cuestión 3 **************');

//Si x sigue siendo NaN, sólo se me ocurre que la función siempre devuelva algún valor falsy como 0.

const isNaNValue3 = (v: any): number => { return 0 };

console.log('Cuestión 3', !isNaNValue3(x) && x !== x);

//Si la función tuviera que ser identica a la de la cuestión 2, no hay valor pues NaN siempre va a devolver true tanto con isNaN como con Number.isNaN. Si se permite que x sea una función, se puede hacer que genere de forma arbitraria valores y así sí se cumpliría.

//Cambio a constante y para que no me de error con x
x = (): number => { return Math.random() };

console.log('Cuestión 3', !isNaNValue(x()) && x() !== x());

console.log('************** Cuestión 4 **************');

x = Infinity;

console.log('Cuestión 4', x + 1 === x - 1); // true

console.log('************** Cuestión 5 **************');

//No se me ocurre nada :(
//console.log('Cuestión 5', x > x); //true