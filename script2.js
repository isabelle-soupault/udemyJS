//------------------------------//
//     CODING CHALLENGE 2      //
//_____________________________//
/* 
Sujet: Reprendre le coding challenge 1 et l'améliorer.
Créer dans le console.log un message indiquant : 'Machin à un IMC plus haut que truc et inversement'
Utiliser la fonction if /else

 */

let highJohn, heighMark, tallMark, tallJohn, imcMark, imcJohn, highJohn2, heighMark2, tallMark2, tallJohn2, imcMark2, imcJohn2;

tallMark = 78;
heighMark = 1.69;

tallJohn = 92;
heighJohn = 1.95;

imcMark = tallMark / (heighMark ** 2);
imcJohn = tallJohn / heighJohn ** 2;


console.log(imcMark, imcJohn);
tallMark2 = 95;
heighMark2 = 1.88;

tallJohn2 = 85;
heighJohn2 = 1.76;


imcMark2 = tallMark2 / heighMark2 ** 2;
imcJohn2 = tallJohn2 / heighJohn2 ** 2;

console.log(imcMark2, imcJohn2);

let markHigherImc = imcMark > imcJohn;

console.log(markHigherImc);

let markHigherImc2 = imcMark2 > imcJohn2;

console.log(markHigherImc2);

if (imcMark > imcJohn) {
    console.log("L'IMC de Mark est plus élevé que celui de John");
} else {
    console.log("L'IMC de John est plus élevé que celui de Mark");
};

// Pour aller plus loin  (ajout de la valeur de l'IMC dans l'alerte):

if (imcMark2 > imcJohn2) {
    console.log(`L'IMC de Mark(${imcMark2}) est plus élevé que celui de de John(${imcJohn2})`);
} else {
    console.log(`L'IMC de John(${imcJohn2}) est plus élevé que celui de Mark(${imcMark2})`);
}