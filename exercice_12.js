let result = '';
for (let i = 0; i<=5; i++){
    for(let j = 1; j<=i; j++){
        result = result + i
    }
    result = result + "<br/>";
}
document.body.innerHTML = result;
