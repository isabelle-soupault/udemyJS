//------------------------------//
//     CODING CHALLENGE 3      //
//_____________________________//
/* 
Sujet: Les pourboires de Steeve


Steve souhaite un petit calculateur pour définir le montant du pourboire en fonction de la somme dépensée.
Dans son pays, il est d'usage de laisser :
15% si la facture est entre 50 et 300.
20% si la valeur est différente.

1 - Calculer le pourboire en fonction de la facture. Créer une variale tip. NE PAS utiliser if / else.
Si c'est trop compliquer, commencer par if/else et passer en ternaire.
2 - Faire un appel contenant les informations suivantes : le montant de la note, le montant du pourboire et le montant total de la facture.

Rappels :
Pour calculer 20% c'est, 20/100, soit multiplier par 0.2
Un chiffre compris entre 50 et 300 se traduit par  >= 50 && <= 300

Tester pour les valeurs suivantes : 
 275, 40 et 430

*/

/* switch (tip) {
    case 'bill >= 50 || bill <= 300':
        tip = bill * 0.15;
        console.log(tip);
        break;

    case '20% ': bill < 50 || bill > 300;
        tip = bill * 0.2;
        console.log(tip);
        break;
    default:
        console.log('Pas de pourboire !');
} */

bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2;
console.log(tip);


console.log(`le pourboire est de ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2} euros`);

let bill = prompt('Valeur de la note ?');

let tip;

alert(`la facture est de ${bill} euros , le pourboire est de ${bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2} euros et le total de la note est de ${Number(bill) + Number(tip)} euros`);