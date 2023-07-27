function subsets(word) {

  const subsets = [];

  for (let i = 1; i < word.length; i++) {
      subsets.push(word.substring(i, word.length));
  }

  return subsets;
}

// Ejemplo
console.log(subsets("message"));

//Challenge
console.log('********** 112 Subsets Challenge **********');

function subsets2(word) {

  const word_letters = word.split("");
  let subset_letters = "";

  const subsets = word_letters.map(letter => {
      subset_letters += letter;
      if (subset_letters.length < word_letters.length) {
          return word.replace(subset_letters, "");
      }
  }).filter((word => word));

  return subsets;
}

console.log(subsets2("message"));