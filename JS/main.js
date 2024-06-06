// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.querySelector(".container")

// crea una ripetizione di numeri con for che vada dallo 0 al 100
for (let i = 1; i <= 100; i++){
    console.log(i)
// creare contenitore dei numeri
    const element = `<div class="box">${i}</div>`;
    console.log(element);
// indichiamo che l'elemento va inserito nel container
    container.innerHTML +=element;

    if ( element === 3 ) {
        box.classList.add("fizz")
    } 
}


// crea una variabile con if , else per modificare i numeri multipli di 3 e 5

const element = document.getElementsByClassName("i")





// assegna delle classi alle variabili in modo che possiano essere modificati