console.log("************** CHALLENGES / RETOS *********************");
console.log("Use this folder 03-retos to practice with challenge exercises");
console.log("You can add new files as long as they are imported from index.ts");


console.log('************** Deep Access **************');

console.log('************** Apartado A **************');

let myObject: any = {
    a: 1,
    b: {
        c: null,
        d: {
            e: 3,
            f: {
                g: "bingo",
            }
        }
    }
};

const deepGet = (myObj: any, ...keys: string[]) => {

    if (keys.length === 0) return myObj;

    const [currentKey, ...otherKeys] = keys;

    return deepGet(myObj[currentKey], ...otherKeys);
};

console.log(deepGet(myObject, "x")); // undefined
console.log(deepGet(myObject, "a")); // 1
console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
console.log(deepGet(myObject, "b", "c")); // null
console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
console.log(deepGet(myObject));

console.log('************** Apartado B **************');

myObject = {};

const deepSet = (value: number, myObj: any, ...keys: string[]) => {

    if (keys.length === 0) return;
    if (keys.length === 1) myObj[keys[0]] = value;
    else {

        const [currentKey, ...otherKeys] = keys;
        if (!myObj.hasOwnProperty(currentKey)) myObj[currentKey] = {};
        deepSet(value, myObj[currentKey], ...otherKeys);
    }
};

deepSet(1, myObject, "a", "b");
console.log(JSON.stringify(myObject));  // {a: { b: 1}}
deepSet(2, myObject, "a", "c");
console.log(JSON.stringify(myObject));  // {a: { b: 1, c: 2}}
deepSet(3, myObject, "a");
console.log(JSON.stringify(myObject));  // {a: 3}
deepSet(4, myObject);
console.log(JSON.stringify(myObject));  // Do nothing // {a: 3}


console.log('************** Flatten Array **************');

console.log('************** Apartado A **************');

const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

const FlatArray = (array: any[]) => { return array.flat(Infinity) };

console.log(FlatArray(sample));
console.log(sample);


console.log('************** Apartado B **************');

const FlatArray2 = <T>(array: Readonly<T[]>): T[] => {
    let flatArray = array.flat(Infinity);
    return flatArray;
};

console.log(FlatArray2(sample));

type embeddedArray = embeddedArray[] | number | number[];

const internalFlatten = (
    array: embeddedArray[],
    flattenArray: number[] = []
) => {
    array.forEach((item) => {
        if (typeof item === 'number') {
            flattenArray.push(item);
        } else {
            return internalFlatten(item, flattenArray);
        }
    });
    return flattenArray;
};

const flatten = (array: embeddedArray[]) => {
    return internalFlatten(array);
};

console.log(flatten(sample));


console.log('************** Memoization **************');


console.log('************** Tree **************');


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

console.log('************** Console Traces **************');

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
    await delay(time);
    console.log(message);
};

const triggers = [
    async () => await showMessage([200, "third"]),
    async () => await showMessage([100, "second"]),
];

const run = async (triggers) => {

    for (const trig of triggers) {
        await trig();
    }

    console.log("first");
};

run(triggers);



const sampleArray = [1, 2, 3];

const tailMutable = <T>(array: T[]): T[] => (array.shift(), array);

const tailImmutable = <T>(array: Readonly<T[]>): T[] => {
    const [, ...tail] = array ?? [];
    return tail;
};

console.log(sampleArray, tailMutable(sampleArray));
console.log(sampleArray, tailImmutable(sampleArray));