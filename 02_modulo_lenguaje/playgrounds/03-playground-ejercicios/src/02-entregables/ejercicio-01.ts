console.log("************** DELIVERABLE 01 *********************");
console.log('******* Head *******');

const dogs: string[] = ["German shepard", "Rottweiler", "Golden Retriever"];

const head = (array: string[]): string => {
    const [first_dog] = array;
    return first_dog;
};

console.log("Función head", head(dogs));

console.log('******* Tail *******');

const tail = (array: string[]): string[] => {
    const [, ...dogsButFirst] = array;
    return dogsButFirst;
};

console.log("Función tail", tail(dogs));

console.log('******* Init *******');

const init = (array: string[]): string[] => array.slice(0, -1);

console.log("Función init", init(dogs));

console.log('******* Last *******');

const last = (array: string[]): string => array[array.length - 1];
const last2 = (array: string[]): string[] => array.slice(-1);

console.log("Función last", last(dogs));
console.log("Función last2", last2(dogs));