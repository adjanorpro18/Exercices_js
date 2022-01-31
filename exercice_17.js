
let page = "<ul>";
let nombre =10;
for(let i=0; i<=nombre; i++ ){
    page = page + '<li>' +  Math.floor(Math.random() * 11) + '</li>';
    let tmp;
    if (tmp == 10){
       console.log("La valeur " + tmp + "fait partie de la page"); 
    }
}
page = page + '</ul>';
document.body.innerHTML = page;
