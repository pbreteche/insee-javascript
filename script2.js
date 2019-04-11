'use strict';


/**
 * déclaration avec mot clé
 */

variable1; // non authorisée en mode «strict»

var variable2; // portée de fonction
let variable3; // portée de bloc
const variable4; // portée de bloc + réaffectation interdite

/**
 * Opérateurs
 */

123 == "123.0" // true

s0 =  'Bonjour'
s1 = new String('Bonjour')
s2 = new String('Bonjour')
s0 == s1 // true
s1 == s2 // false

'bonjour'.split('o')

// /([a-z]+)/i.match('bonjour')

['Vive', 'le', 'js'].join(' ')

/**
 * structures de contrôle
 */

/**
 * conditionnelles
 */

if ('expression bouléenne') {
    let i= 0; // la variable n'existe que dans le "if"
}
else if ('autre expression') {

}
else {

}

switch(data) {
    case 'hello':
        // faire quelque chose
        break
    case 'coucou':
        // faire quelque chose
        return
    case 123:
        // faire quelque chose
        throw 'ayayaye'

    default:
}

'use strict';
let i = 4;
let j = 1;
{
    let i = 5;
    j += i
}
j += i
console.log(j) // 10

/**
 * itérative
 */
while('expression booléenne') {

}

for(let i=0; collection.length > i; i++) {

}

const obj = { nom: 'Gérard', prenom: 'Bouchard'}
obj.nom;
obj['n'+'om'];
for(const prop in obj) {
    console.log(obj[prop]);
} 

const fruits = ['ananas', 'banane', 'cerise'];
fruits.ville = 'Orléans';

for (const prop in fruits) {
    console.log(prop)
}

for (const fruit of fruits) {
    console.log(fruit)
}