let page = '<ul>';
let nombre = 10;
let nombre10 = 0;
for(let i = 0;i < nombre;i++) {
   let tmp = Math.floor(Math.random() * 11);
   if(tmp == 10) {
     nombre10++;
   }
   page = page + '<li>' + tmp + '</li>';
}
page = page + '</ul>';
page = page + '<p>Il y a eu ' + nombre10 + ' tirages de 10.</p>'
document.body.innerHTML = page;