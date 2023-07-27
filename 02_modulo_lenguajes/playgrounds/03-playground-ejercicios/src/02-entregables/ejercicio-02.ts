console.log("************** DELIVERABLE 02 *********************");
console.log('********** 2. Concat **********');

const dogs_bis: string[] = ["German shepard", "Rottweiler", "Golden Retriever"];
const birds: string[] = ["Pigeon", "Dove", "Owl", "Eagle"];

const concat = (a: string[], b: string[]): string[] => [...a, ...b];
const concat2 = (a: string[], b: string[]): string[] => a.concat(b);
const concat3 = (a: string[], b: string[]): string[] => { 
    a.push(...b); 
    return a;
};
const concat4 = (a: string[], b: string[]): string[] => { 
    Array.prototype.push.apply(a, b); 
    return a; 
};

console.log("Función concat", concat(dogs_bis, birds));
console.log("Función concat2", concat2(dogs_bis, birds));
console.log("Función concat3", concat4(dogs_bis, birds));
console.log("Función concat4", concat4(dogs_bis, birds));

console.log('********** 2. Concat Opcional **********');

const cats = ["Sphynx", "Persian", "ragdoll"];

const concat5 = (...args: string[][]): string[] => args.flat();

console.log("Función concat opcional", concat5(dogs_bis, birds, cats));