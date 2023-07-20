function biggestWord(phrase) {

    const words = phrase.split(" ");
    let biggestWordLength = 0;
    let biggestWord = "";

    words.forEach(word => {
        const currentWord = word.replaceAll(/[&#,+()~%.;'":*¡!¿?]/g, "")
        const wordLength = word.length;

        console.log(wordLength)

        biggestWord = (biggestWordLength < wordLength) ? currentWord : biggestWord;
        biggestWordLength = (biggestWordLength < wordLength) ? wordLength : biggestWordLength;
    });

    return biggestWord;
};

console.log(biggestWord("Esta frase es para comprobar que se está ejecutando correctamente la función biggestWord y funciona."));