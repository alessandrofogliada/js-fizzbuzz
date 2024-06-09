// // Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Associo la section di HTML a js

let container = document.getElementById('container');

// crea una variabile con if , else per modificare i numeri multipli di 3 e 5

for (let i = 1; i <= 100; i++) {
// creo un elemento in modo da poter creare uuna serie di div
    let cartellaColorata = document.createElement("div");
// assegno per ogni caso i valori richiesti
if (i % 3 === 0 && i % 5 === 0){
   cartellaColorata.style.backgroundColor = "green";
   cartellaColorata.textContent = "Fizz";

} else if (i % 3 === 0) {
    cartellaColorata.style.backgroundColor = "yellow";
    cartellaColorata.textContent = "Buzz";

} else if (i % 5 === 0) {
    cartellaColorata.style.backgroundColor = "red";
    cartellaColorata.textContent = "FizzBuzz";

} else { 
    cartellaColorata.style.backgroundColor = "blue";
    cartellaColorata.textContent = i;
}
// appendo le informazione create ai div
     container.append(cartellaColorata);
}




// assegna delle classi alle variabili in modo che possiano essere modificati