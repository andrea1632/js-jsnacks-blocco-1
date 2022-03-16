let primaParola = prompt("inserisci la prima parola");
let secondaParola = prompt("inserisci la seconda");
let content = document.getElementById("contenitore");

if ( primaParola.length < secondaParola.length){
    content.innerHTML += `<div>${primaParola}</div><div>${secondaParola}</div>`
} else if (primaParola.length == secondaParola.length){
    content.innerHTML += `le parole${primaParola} e ${secondaParola} sono lunghe uguali`    
} else{
    content.innerHTML += `<div>${secondaParola}</div><div>${primaParola}</div>`
}