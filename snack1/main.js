let numero1 = prompt("inserisci il primo numero");
let numero2 = prompt("inserisci il secondo numero");
let content = document.getElementById("contenitore");
if (numero1 > numero2){
    content.innerHTML += `il numero maggiore è ${numero1}`
}
else if (numero1 == numero2){
    content.innerHTML += `i numeri sono uguali`
}
else{
    content.innerHTML += `il numero maggiore è ${numero2}`
}