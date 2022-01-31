let budget = 1275000;
let achats = 1250000;
if (budget >= achats)
{
    alert("Le budget de"+  budget  + "€ permet de payer" +  achats + "€ d'achats !")
}
else
{
    alert("Le budget de "+   budget  +  " € ne permet pas de payer " +   achats +  " € d'achats !")
}

let ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let taux_tva_calcul = (taux_tva / 100) + 1;
let ttc = ht * taux_tva_calcul;
document.body.innerText = ttc;