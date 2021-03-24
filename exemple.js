// Etape 1 - Sélectionner nos éléments
let input       = document.querySelector('#prix');
let error       = document.querySelector('small');
let formulaire  = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur

error.style.display='none';

// Etape 3 - Générer un nombre aléatoire
let nombreAleatoire = Math.floor(Math.random()*1001);
// Math.floor = selectionne l'entier en dessous du nombre ex: 782,5 = 782
// Math.random génère un nombre aléatoire entre 0 et 1 
// On mutiplie par 1001 pour que e chiffre 1000 soit possible 

let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier (LA définir avant de l'utiliser !)
function verifier(nombre){

    let instruction = document.createElement('div');

    if(nombre < nombreAleatoire){
        //afficher c'est +
        // Ajouter un contenu '#1 (4) C'est plus;
        instruction.textContent = "#"+coups +" " +"("+nombreChoisi+")" +" C'est plus !";
        // Ajouter les classes instructions et plus "instruction plus"
        instruction.className="instruction plus";
        
    }
    else if(nombre> nombreAleatoire){
        //Afficher c'est -
         // Ajouter un contenu '#1 (4) C'est moins;
         instruction.textContent = "#"+coups +" " +"("+nombreChoisi+")" +" C'est moins !";

        // Ajouter les classes instructions et moins;
        instruction.className="instruction moins";
    }
    else {
        // Félicitations
        // Ajouter un contenu '#1 (4) Felicitation vous avez le juste prix;
        instruction.textContent = "#"+coups +" " +"("+nombreChoisi+")" +" Félicitations!  Vous avez trouvé le juste prix !";
        // Ajouter les classes instructions et fini;
        instruction.className="instruction fini";
        //désactiver le formulaire une fois le prix trouvé
        input.disabled =true;
        
    }
    //ajouter l'élément  devant les autres
    document.querySelector('#instructions').prepend(instruction);


}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',()=> {
    if(isNaN(input.value)){
        //Afficher le message d'erreur
        error.style.display="inline";
    }
    else{
        //cacher le message d'erreur
        error.style.display="none";
    }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e)=> {
    e.preventDefault(); // On annule l'évent par défaut des naviguateur du bouton submit qui envoie sur une autre page

    if(isNaN(input.value) || input.value==""){
    // Mettre notre bordure de formulaire en rouge4
    input.style.borderColor ="red";
    }
    else {
        // Calculer le nombre de coup On ajoute 1 à coups
        coups++;
        // mettre notre borudre en gris (silver)
        input.style.borderColor ="silver";
        // Stocker le nombre choisi par l'user dans nombre choisi
        nombreChoisi = input.value;
        // reinitialiser  la barre de recherche
        input.value = "";
        verifier(nombreChoisi);
    }
});


