// Ajout d'un event listener à l'objet button, quand on clique sur le bouton une fonction anonyme s'exécute et déclenche une alert
// numberOfDrumButtons récupère tous les boutons avec la class drum(ici 7 boutons avec class drum)
var numberOfDrumButtons = document.querySelectorAll(".drum").length
// Ici on ajoute un event listener à tous les button.drum avec une boucle for
for (var i = 0; i<numberOfDrumButtons; i++){
  // .querySelectorAll("button") retourne un tableau de tous les objets "button", i commence à 0 et la boucle s'arrête quand le nombre de button.drum est atteint! [i] commence à 0, donc à la 1ère index, donc au 1er button. Chaque passage dans la boucle ajoute un event listener aux button.drum
  // function (){} est une fonction anonyme

  document.querySelectorAll("button")[i].addEventListener("click", function (){
    // "this" représente le button clické, "this.innerHTML" sélectionne se qui se trouve entre les balises HTML des button.drum donc les strings des lettres de chaque button.drum
    var buttonInnerHTML = this.innerHTML;
    // La function makeSound() prend l'argument "this.innerHTML", donc la string entre les balises du "button.drum" clické(w,a,s nous intéressent)
    // makeSound() avec "switch" qui prend aussi "this.innerHTML" fait en sorte que les bons sons jouent quand "w,a,s" etc sont arguments de "makeSound()"
    // makeSound() est déclarée + bas
    makeSound(buttonInnerHTML);
});

}

// Ajout d'un event listener à tout le DOM, de cette façon peu importe la touche pressée on en sera averti.
// le type de event "keydown" se trigger quand une touche est pressée et lance ici la "function(event)"
// l'objet "event" retourne un tas d'infos sur l'event produit(ici une quelconque touche pressée), une de ses propriétés est ".key" qui retourne le nom de la touche pressée
document.addEventListener("keydown", function(event){
  // on passe donc le nom de la touche pressée ("event.key") en argument de la fonction "makeSound()" pour que le bon son soit joué quand une touche est pressée
  makeSound(event.key);
});


// la fonction makeSound(key) est utilisé pour les button.drum et les touches pressée. Elle vérifie quelles touches/this.innerHTML sont concernés et jouent les bons sons en fonction d'eux
function makeSound(key) {
  switch (key) {
    // si la string est "w"...
    case "w":
    // tom1 récupère un objet Audio contenant un fichier mp3
    // on crée un élément audio HTML
    var tom1 = new Audio("sounds/tom-1.mp3");
    // on joue cette objet, donc le mp3 qui est sa propriété
    tom1.play();
    // Pas oublier le break
    break;
    // si la string est "a"...
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "k":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    // cas par défaut, si les autres fonctionnent pas
    default: console.log(buttonInerHTML);

  }
}
