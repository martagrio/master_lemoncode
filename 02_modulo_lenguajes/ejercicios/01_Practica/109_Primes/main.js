function isPrime(num) {

    if (num === 1) return false;

    const sqrt = Math.sqrt(num);

    for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0)
            return false;
    }

    return true;
}

function showPrimes(from, to) {

    for (let i = from; i <= to; i++) {
        console.log(isPrime(i) ? `${i} is PRIME!` : `${i} is not a prime`);
    }
}

showPrimes(1, 100);