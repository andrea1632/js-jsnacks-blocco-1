let numeri = []
let somma;
for (i=0; i<10; i++){
    let numeroInput = prompt("inserisci numero")
    numeri.push(numeroInput)
    somma = numeroInput + numeri[i];
}
console.log(numeri);
document.getElementById("contenitore").innerHTML += `la somma dei numeri è ${somma}`