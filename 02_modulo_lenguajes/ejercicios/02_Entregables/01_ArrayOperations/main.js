console.log('******* Head *******');

const dogs = ["German shepard", "Rottweiler", "Golden Retriever"];

const head = (array) => {
    const [first_dog] = array;
    return first_dog;
};

console.log("Función head", head(dogs));

console.log('******* Tail *******');

const tail = (array) => {
    const [, ...dogsButFirst] = array;
    return dogsButFirst;
};

console.log("Función tail", tail(dogs));

console.log('******* Init *******');

const init = (array) => array.slice(0, -1);

console.log("Función init", init(dogs));

console.log('******* Last *******');

const last = (array) => array[array.length - 1];
const last2 = (array) => array.slice(-1);

console.log("Función last", last(dogs));
console.log("Función last2", last2(dogs));