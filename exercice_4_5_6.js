let montant_ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let taux_tva_cal = (taux_tva / 100) + 1;
let ttc = montant_ht * taux_tva_cal;
document.body.innerText = ttc; 