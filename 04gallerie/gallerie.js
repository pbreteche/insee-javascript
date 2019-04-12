'use strict';

document.addEventListener('DOMContentLoaded', function(){
    const imageVisioneuse = document.querySelector('.visioneuse img');
    const elementMiniatures = document.querySelector('.miniatures');
    const titre = document.querySelector('body > h1');

    elementMiniatures.querySelectorAll('a').forEach(function(elt){
        elt.addEventListener('click', function(){
            imageVisioneuse.src = elt.children[0].src;
            const nom = humaniser(extraireNomFichier(elt.children[0].src));
            titre.innerText = nom;
        })
    })
});

/**
 * Pour extraire le nom de fichier de l'URL complète 
 * on éclate la chaine suivant les «/»
 * et on ne conserve que le dernier élément
 */
const extraireNomFichier = function (path) {
    return path.split('/').pop();
}

/**
 * extraction du nom de base: la première partie avant le premier «.»
 * 
 * chaque partie doit avoir une première lettre en majuscule
 * les parties sont initialement séparées avec des «-»
 */
const humaniser = function (nomFichier) {
    const nomDeBase = nomFichier.split('.').shift();

    let parties = nomDeBase.split('-');
    // on transforme chaque partie dans la bonne forme
    parties = parties.map(function(elt) {
        // la première lettre en majuscule, les autres en minuscules
        return capitaliser(elt.toLowerCase())
    })
    // une fois chaque partie mise en forme, on les réassemble
    return parties.join(' ');
}

/**
 * Mettre le premier caractère en majuscule
 */
const capitaliser = function(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }