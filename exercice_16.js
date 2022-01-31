
let page = "<ul>";
let nombre =10;
for(let i=1; i<=nombre; i++ ){
    page = page + '<li>' +  Math.floor(Math.random() * 100) + '</li>';
}
page = page + '</ul>';
document.body.innerHTML = page;
