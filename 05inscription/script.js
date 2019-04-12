'use strict';

document.addEventListener('DOMContentLoaded', function(){
    const formulaireInscription = document.querySelector('#formulaire-inscription');
    const btnSoumission = formulaireInscription.querySelector('button');

    const champsEmail = formulaireInscription.querySelector('#user-email');
    champsEmail.addEventListener('change', function() {
        // call permet de personnaliser la valeur
        // de la pseudo-variable "this"
        validation.email.call(this, btnSoumission);
    });

    const champsMotDePasse = formulaireInscription.querySelector('#user-password');
    champsMotDePasse.addEventListener('change', function() {
        // call permet de personnaliser la valeur
        // de la pseudo-variable "this"
        validation.motDePasse.call(this, btnSoumission);
    });
});

const validation = {};

validation.email = function(btnSoumission){
    // le caractère "@" n'a pas été trouvé
    if ( this.value.includes('@')) {
        // définit une erreur de validation personalisée
        // passe le champs (et donc le formulaire) en état «invalid»
        this.setCustomValidity('adresse email non valide');
        btnSoumission.disabled = true;
        // affichage personalisée de l'erreur
        this.nextElementSibling.innerText = 'adresse email non valide';
    }
    else {
        this.setCustomValidity('');
        btnSoumission.disabled = false;
        this.nextElementSibling.innerText = '';
    }
};

validation.motDePasse = function(btnSoumission){
    if (this.value.length < 10) {
        this.setCustomValidity('le mot de passe doit être au moins de 10 caractères'); 
        btnSoumission.disabled = true;
        this.nextElementSibling.innerText = 'le mot de passe doit être au moins de 10 caractères';
    }
    else {
        this.setCustomValidity('');
        btnSoumission.disabled = false;
        this.nextElementSibling.innerText = '';
    }
};