console.log('********** 205 Fibonacci **********');

function fib(n) {

    if (n === 0 || n === 1) return n;

    //Iniciamos los valores para como si se introdujera n = 2
    let [a, b] = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        /* Una vez comienza el bucle a se le asigna el valor 
        actual de b y a b se le suma el valor actual de a */
        
        [a, b] = [b, a + b];
    }

    return b;
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));