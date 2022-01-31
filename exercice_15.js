let tableau = '<table>';
let lignes = parseInt(prompt("Entrez un nombre de lignes!"))
let colonnes = parseInt(prompt("Entrez un nombre de colonnes !"))

for(let i=1; i<= lignes; i++){
    tableau = tableau + '<tr>';
    for(let k = 1; k <= colonnes; k++){
        tableau = tableau + '<td>Djokovic</td>';
    }
    tableau = tableau + '</tr>';
}
tableau = tableau + '</table>';
document.body.innerHTML = tableau;