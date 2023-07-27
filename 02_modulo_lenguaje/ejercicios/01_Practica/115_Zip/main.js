function zipObject(keys, values) {
    const object = {};

    keys.map((key, index) => object[key] = values[index]);

    return object;
}

console.log(zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])); // {spanish: "hola", english: "hi", french: "salut"}

/* Challenge */
console.log('********** 115 Zip Challenge **********');

function zipObject2(keys, values) {
    const object = {};

    values.filter((key, index) => object[key] = keys[index]);

    return object;
}

// Ejemplo
console.log(zipObject2(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}