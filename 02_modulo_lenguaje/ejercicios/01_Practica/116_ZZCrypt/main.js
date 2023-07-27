// Descifra el siguiente secreto:
var secret =
    "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function createDictionary(plain, cipher) {
    const obj = {};
    cipher.split("").map((char, index) => obj[char] = plain[index]);
    return obj;
}

const dictionary = createDictionary(plain, cipher);

function decryptChar(dictionary, character) {
    
    return dictionary.hasOwnProperty(character) 
    ? dictionary[character]
    : (character ? character : " ");    
}

//Con esta función nos ahorramos el crear el dictionario
const decryptChar2 = character => plain[cipher.indexOf(character)] || " ";

function decrypt(secret) {
    
    //return secret.split("").map(char => decryptChar(dictionary, char)).join("");
    return secret.split("").map(char => decryptChar2(char)).join("");
}

console.log(decrypt(secret));