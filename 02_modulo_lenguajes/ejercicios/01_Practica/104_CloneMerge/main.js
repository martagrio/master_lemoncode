/********** 104 Clone - Merge **********/

console.log('********** 104 Clone - Merge **********');

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

//Ambas son shallow copy
const clone = source => ({ ...source });
const clone2 = (source) => Object.assign({}, source);

const shallowCopyA = clone(a);
const shallowCopyB = clone2(b);

console.log('Clone objeto a', shallowCopyA);
console.log('Clone objeto b', shallowCopyB);

console.log(a === shallowCopyA, b === shallowCopyB); //False pues es un nuevo objeto
console.log(a.name === shallowCopyA.name, b.name === shallowCopyB.name); //Verdadero pues apuntan a la misma referencia

function merge(source, target) {
    return Object.assign({}, target, source);
}

const merge2 = (obj1, obj2) => ({ ...obj2, ...obj1 });

console.log('Función merge', merge(a, b));