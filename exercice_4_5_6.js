let montant_ht = prompt("Montant HT ?");
let taux_tva = prompt("Taux de TVA ?");
let taux_tva_cal = (taux_tva / 100) + 1;
let ttc = montant_ht * taux_tva_cal;
if (ttc > 100){
    document.body.innerHTML = '<h1 style="color:red;">' + ttc + '</h1>'
}else{
    document.body.innerHTML = '<h1 style="color:green;">' + ttc + '</h1>'
}

