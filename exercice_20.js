let page = '';
let nombre = 12;
let nombre10 = 0;
for(let i = 0;i < nombre;i++) {
   page = page + '<img src="https://picsum.photos/150/150?random=" + i + />';
}
document.body.innerHTML = page; 