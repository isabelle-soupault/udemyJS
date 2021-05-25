//------------------------------//
//     CODING CHALLENGE 1      //
//_____________________________//
/* 
Sujet: Mark et John souhaitent comparer leur IMC.
Rappel de la formule: IMC = masse / taille² (== masse / taille ** 2) masse en Kilo et taille en mètres.
1 - Stocker les masses et variables dans 2 fonctions
2 - Calculer l'IMC en utilisant la formule.
3 - Créer un booléen MarkHigherIMC contenant l'information que Mark à un IMC suppérieur à celui de John
4 - Faire les tests avec 
tallMark2 = 95;
heighMark2 = 1.88;

tallJohn2 = 85;
heighJohn2 = 1.76;
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