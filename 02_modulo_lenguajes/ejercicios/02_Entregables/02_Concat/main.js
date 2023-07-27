console.log('********** 2. Concat **********');

const dogs = ["German shepard", "Rottweiler", "Golden Retriever"];
const birds = ["Pigeon", "Dove", "Owl", "Eagle"];

const concat = (a, b) => [...a, ...b];
const concat2 = (a, b) => a.concat(b);
const concat3 = (a, b) => {
    a.push(...b);
    return a;
};
const concat4 = (a, b) => {
    Array.prototype.push.apply(a, b);
    return a;
};

console.log("Función concat", concat(dogs, birds));
console.log("Función concat2", concat2(dogs, birds));
console.log("Función concat3", concat3(dogs, birds));
console.log("Función concat4", concat4(dogs, birds));

console.log('********** 2. Concat Opcional **********');

const cats = ["Sphynx", "Persian", "ragdoll"];

const concat5 = (...args) => args.flat();

console.log("Función concat opcional", concat5(dogs, birds, cats));