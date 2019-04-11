'use strict';

// Ancienne syntaxe, dépréciée depuis DOM-2 (2003)
// document.load = function () {}
document.addEventListener('DOMContentLoaded', function(){
    // document.getElementById => récupérer un élément par son identifiant
    // document.getElementsByName

    const interrupteursMenu = document.querySelectorAll('nav > ul > li > a');

    for (const interrupteur of interrupteursMenu) {
        interrupteur.addEventListener('click', function(){
            // Attention! Cette fonction sera invoqué plus tard en asynchrone
            // les variables locales à la boucle n'existeront plus
            console.log(this);
            // avec addEventListener, this est forcé sur l'élément
            // sur lequel nous avons posé l'écouteur
            this.nextElementSibling.classList.add('active');
        });
    }
});
