function includes(array, value) {
    let included = 0;
    array.map(elem => {
        if (elem === value) included++;
    });
    return included > 0 ? true : false;
}

const includes2 = (array, value) => array.indexOf(value) > 0 ? true : false;

// Ejemplo:
console.log('Función includes', includes([1, 2, 3], 3)); // true
console.log('Función includes', includes([1, 2, 3], 0)); // false
console.log('Función includes2', includes2([1, 2, 3], 3)); // true
console.log('Función includes2', includes2([1, 2, 3], 0)); // false