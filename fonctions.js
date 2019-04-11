/**
 * Définitions de fonctions
 */

carre(5); // retourne 25

/**
 * Syntaxe de déclaration
 */
function carre(nombre) {
    return nombre * nombre;
}

carre(5); // retourne 25

cube(5); // déclenche undefined is not a function

/**
 * Syntaxe d'expression
 */
const cube = function(nombre) {
    return nombre * nombre * nombre;
}

cube(5); // retourne 125

/**
 * Bonne pratique:
 *   déclarer les fonctions en tant que propriété d'un objet
 *   => permet de simuler un mécanisme d'espace de nommage
 *   => évite d'écraser des fonctions natives de javascript
 */
const maBibliotheque = {};
maBibliotheque.faireQqChose = function() {};

function open () {

}

maBibliotheque.saluer = function(prenom, langue = 'fr') {
    langue = langue ? langue : 'fr'; // redondant avec valeur par défaut du paramètre

}

/**
 * 4 façon d'appeler une fonction
 */
/**
 * en tant que fonction
 * => this est undefined
 * => le mode non-strict surcharge avec l'objet global
 */
function fn1(nom) { return { nom: nom}; }
const felix1 = fn1('Felix');

/**
 * en tant que constructeur
 * => this est le nouvel objet en construction
 * => par convention, nommage avec majuscule
 */
function Chat(nom) { this.nom = nom}
const felix = new Chat('Felix');


/**
 * en tant que méthode
 * => this est l'objet auquel la fonction est attachée
 * => en attachant à un prototype, la fonction devient accessible
 *    à tous les ojets partageant le même constructeur
 */
Chat.prototype.miauler = function () { 
    return this.nom + ': miaou'
};
felix.miauler();

/**
 * via call ou apply
 * => permet de forcer ponctuellement la valeur de this
 */
const manger = function() { this.nom+': miam'}
manger.call(felix);
