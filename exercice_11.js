let table = 5;
let table_multi = '';
for(let i = 1;i <= 12;i++) {
    table_multi = table_multi + table + ' x ' + i + ' = ' + (table * i) + ' <br />';
}
document.body.innerHTML = table_multi;