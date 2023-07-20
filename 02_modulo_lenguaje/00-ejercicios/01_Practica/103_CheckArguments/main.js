function f(input) {
    var result = (input === undefined ? "Unkown" : input) || "";
    return result;
}

function f2(input = "Uknown") {
    var result = input || "";
    return result;
}

function f3(input = "Uknown") {
    var result = input ?? "";
    return result;
}

console.log('Función f con Undefined:', f());
console.log('Función f con Null:', f(null));
console.log('Función f con String:', f('Paquito el chocolatero'));

console.log('Función f2 con Undefined:', f2());
console.log('Función f2 con Null:', f2(null));
console.log('Función f2 con String:', f2('Paquito el chocolatero'));

console.log('Función f3 con Undefined:', f3());
console.log('Función f3 con Null:', f3(null));
console.log('Función f3 con String:', f3('Paquito el chocolatero'));