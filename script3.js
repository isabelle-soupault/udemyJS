//------------------------------//
//     CODING CHALLENGE 3      //
//_____________________________//
/* 
Sujet: 2 équipes de gymnastique les daulphins et les Koalas s'affrontent 3 fois. L'équipe gagnante est celle qui aura le plus de points.

1 - Calculer la moyenne de chaque équipe en utilisant les résultats de tests ci-dessous
2 - Comparer les moyennes entre les deux équipes et afficher le résultat dans la console. Ne pas oublier le cas du match nul.
3 - Inclure un minimum de score de 100. Dans ce cas de figure, seule l'équipe avec le plus haut score et avec un score supérieur ou égal à 100 peut gagner.
4 - Le score minimal s'applique maintenant également sur les matchs nuls.

Chiffres tests :
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


 */

let moyenneDaulphinsA, moyenneDaulphinsB, moyenneDaulphinsC, moyenneKoalasA, moyenneKoalasB, moyenneKoalasC;

console.log(moyenneDaulphinsA = (96 + 108 + 89) / 3);
console.log(moyenneDaulphinsB = (97 + 112 + 101) / 3);
console.log(moyenneDaulphinsC = (97 + 112 + 101) / 3);

console.log(moyenneKoalasA = (88 + 91 + 110) / 3);
console.log(moyenneKoalasB = (109 + 95 + 123) / 3);
console.log(moyenneKoalasC = (109 + 95 + 106) / 3);

console.log('les vainqueurs sans condition pour chaque cas')

console.log('Cas A')

if (moyenneDaulphinsA > moyenneKoalasA) {
    console.log('Les Dauphins ont gagnés avec ' + moyenneDaulphinsA + ' points !');
} else if (moyenneDaulphinsA < moyenneKoalasA) {
    console.log('les Koalas ont gagnés avec ' + moyenneKoalasA + ' points !');
} else {
    console.log('Match null, exéquo !');
}

console.log('Cas B')

if (moyenneDaulphinsB > moyenneKoalasB) {
    console.log('Les Dauphins ont gagnés avec ' + moyenneDaulphinsB + ' points !');
} else if (moyenneDaulphinsB < moyenneKoalasB) {
    console.log('les Koalas ont gagnés avec ' + moyenneKoalasB + ' points !');
} else {
    console.log('Match null, exéquo !🏆');
}

console.log('Cas C')

if (moyenneDaulphinsC > moyenneKoalasC) {
    console.log('Les Dauphins ont gagnés avec ' + moyenneDaulphinsC + ' points !');
} else if (moyenneDaulphinsC < moyenneKoalasC) {
    console.log('les Koalas ont gagnés avec ' + moyenneKoalasC + ' points !');
} else {
    console.log('Match null, exéquo !');
}

console.log("ajout d'un minimum de 100 points pour la victoire ou le match null");
console.log('cas numéro A');

if ((moyenneDaulphinsA > moyenneKoalasA) && (moyenneDaulphinsA >= 100)) {
    console.log('Les Dauphins ont gagnés !');
} else if ((moyenneDaulphinsA < moyenneKoalasA) && (moyenneKoalasA >= 100)) {
    console.log('les Koalas ont gagnés !');
} else if ((moyenneDaulphinsA === moyenneKoalasA) && (moyenneDaulphinsA >= 100)) {
    console.log("Les deux équipes gagnent le trophée ! Les Dauphins ont marqué" + ' ' + moyenneDaulphinsA + "points et les Koalas ont marqué" + ' ' + moyenneKoalasA + ' points');

} else {
    console.log("Il n'y a pas de vainqueur 🏆, les Dauphins ont marqué" + ' ' + moyenneDaulphinsA + "points et les Koalas ont marqués" + ' ' + moyenneKoalasA + ' points');
}

console.log('cas numéro B');

if ((moyenneDaulphinsB > moyenneKoalasB) && (moyenneDaulphinsB >= 100)) {
    console.log('Les Dauphins ont gagnés avec ' + moyenneDaulphinsB + ' points !');
} else if ((moyenneDaulphinsB < moyenneKoalasB) && (moyenneKoalasB >= 100)) {
    console.log('les Koalas ont gagnés avec ' + moyenneKoalasB + ' points !');
} else if ((moyenneDaulphinsB === moyenneKoalasB) && (moyenneDaulphinsB >= 100)) {
    console.log("Les deux équipes gagnent le trophée ! Les Dauphins ont marqué" + ' ' + moyenneDaulphinsB + "points et les Koalas ont marqué" + ' ' + moyenneKoalasB + ' points');

} else {
    console.log("Il n'y a pas de vainqueur 🏆, les Dauphins ont marqué" + ' ' + moyenneDaulphinsB + "points et les Koalas ont marqués" + ' ' + moyenneKoalasB + ' points');
}

console.log('cas numéro C');

if ((moyenneDaulphinsC > moyenneKoalasC) && (moyenneDaulphinsC >= 100)) {
    console.log('Les Dauphins ont gagnés avec ' + moyenneDaulphinsC + ' points !😎');
} else if ((moyenneDaulphinsC < moyenneKoalasC) && (moyenneKoalasC >= 100)) {
    console.log('les Koalas ont gagnés avec ' + moyenneKoalasC + ' points !😎');
} else if ((moyenneDaulphinsC === moyenneKoalasC) && (moyenneDaulphinsC >= 100)) {
    console.log("Les deux équipes gagnent le trophée ! Les Dauphins ont marqué" + ' ' + moyenneDaulphinsC + "points et les Koalas ont marqué" + ' ' + moyenneKoalasC + ' points 😎');

} else {
    console.log("Il n'y a pas de vainqueur 🏆, les Dauphins ont marqué" + ' ' + moyenneDaulphinsC + "points et les Koalas ont marqués" + ' ' + moyenneKoalasC + ' points');
}