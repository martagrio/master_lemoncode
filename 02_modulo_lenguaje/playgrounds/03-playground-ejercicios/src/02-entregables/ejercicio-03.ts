console.log("************** DELIVERABLE 03 *********************");
console.log('********** 3. Clone - Merge **********');

const a: { name: string, surname: string, country: string } = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: { name: string, age: number, married: boolean } = { name: "Luisa", age: 31, married: true };

//Ambas son shallow copy
const clone = (source: any) => ({ ...source });
const clone2 = (source: any) => Object.assign({}, source);

const shallowCopyA: { name: string, surname: string, country: string } = clone(a);
const shallowCopyB: { name: string, age: number, married: boolean } = clone2(b);

console.log('Clone objeto a', shallowCopyA);
console.log('Clone objeto b', shallowCopyB);

console.log(a === shallowCopyA, b === shallowCopyB); //False pues es un nuevo objeto
console.log(a.name === shallowCopyA.name, b.name === shallowCopyB.name); //Verdadero pues apuntan a la misma referencia

function merge(source: any, target: any) {
    return Object.assign({}, target, source);
}

const merge2 = (obj1: any, obj2: any) => ({ ...obj2, ...obj1 });

console.log('Función merge', merge(a, b));
console.log('Función merge2', merge2(a, b));