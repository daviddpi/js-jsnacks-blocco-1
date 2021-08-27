/*
* L'utente inserisce due parole in successione, con due prompt. 
* Il software stampa prima la parola più corta, poi la parola più lunga.
*/
//SNACK 1
// let parolaUno = prompt("Inserisci la prima parola");
// let parolaDue = prompt("Inserisci la seconda parola");

// //confronta la lunghezza delle parole, se è più corta la stampa prima
// if(parolaUno.length > parolaDue.length){
//     console.log(parolaDue);
//     console.log(parolaUno);
// } else if (parolaUno.length < parolaDue.length){
//     console.log(parolaUno);
//     console.log(parolaDue);
// } else { // caso in cui le parole hanno stessa dimensione
//     console.log("Le 2 parole hanno stessa lunghezza");
// }

//-----------------------------------------------------------------------------
//SNACK 2
/*
* Il software deve chiedere per 10 volte all'utente di inserire un numero.
* Il programma stampa la somma di tutti i numeri inseriti. 
*/

// let somma = 0;
// for(var i = 0; i < 10; i++){
//     somma += parseInt( prompt("Inserisci il numero n. " + (i + 1)) );
//     // somma = somma + parseInt( prompt("Inserisci il numero n. " + (i + 1)) );
// }
// console.log(somma);

//-----------------------------------------------------------------------------
// SNACK 3
/*
*   In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
*   chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

// let nomiLista = ["David", "Riccardo", "Olga", "Gianluca"];
// let mioNome = prompt("Inserisci il tuo nome");
 
// //rendo maiuscola la prima lettera del nome
// if(mioNome != (mioNome.charAt(0).toUpperCase() + mioNome.slice(1)) ){
//     mioNome = mioNome.charAt(0).toUpperCase() + mioNome.slice(1);
// }
// for(var i = 0; i < nomiLista.length; i++){
//     if(nomiLista[i] == mioNome) {
//     alert("Sei nell'elenco, puoi partecipare alla festa. Enjoy.");
//     i = nomiLista.length; //in questo modo esce direttamente dal ciclo senza passare dall else if
//     } else if (i == (nomiLista.length-1) ) { // se fino all'ultimo giro non è stato confermato il nome allora non può partecipare
//     alert("Mi dispiace non sei in elenco, non puoi partecipare alla festa");
//     }
// }

//-----------------------------------------------------------------------------
//SNACK 4
/*
* Crea un array vuoto.
* Chiedi per 6 volte all'utente di inserire un numero,
* se è dispari inseriscilo nell'array.
*/

// let numVettori = [];
// for(var i = 0; i < 6; i++){
//     let tuoNumero = parseInt( prompt("Inserisci un numero n." + (i + 1) ) );
//     if(tuoNumero % 2 == 1){
//         //arrayNumerico[i] = tuoNumero; soluzione corretta ma la lunghezza dell'array sarà di 6 anche se i numeri dispari sono inferiori
//         numVettori.push(tuoNumero); //push mette l'elemento dell'ultimo spazio dell'array
//     }
//     console.log("Tutti i numeri: " + tuoNumero);
// }
// console.log("I numeri dell'array sono: " + numVettori);

//-----------------------------------------------------------------------------
//SNACK 5
/*
* Calcola la somma e la media dei primi 10 numeri
*/

// let somma = 0;
// let media = 0;

// for(var i = 0; i <= 10; i++){
//     somma += i;
// }

// console.log(somma);
// console.log(somma / 10);

//-----------------------------------------------------------------------------
//SNACK 6
/*
*	Crea un array vuoto.
* 	Chiedi all'utente di inserire cinque parole.
*	Quando la parola è scritta tutta in maiuscolo stampa un alert,
*	altrimenti inseriscile nell'array.
*/

// let arrayVuoto = [];

// for(var i = 0; i < 5; i++){
//    let parola = prompt("Inserisci la parola n. " + (i + 1) );

//     if(parola == parola.toUpperCase()){
//         alert("La parola è scritta in maiuscolo")
//     } else {
//         arrayVuoto.push(parola);
//     }
//     console.log(parola);
// }
// console.log(arrayVuoto);

//-----------------------------------------------------------------------------
//SNACK 7
/*
*  Il software deve chiedere per 5 volte all'utente di inserire un numero.
*  Il programma stampa la somma di tutti i numeri inseriti.
*  Esegui questo programma in due versioni, con il for e con il while.
*/

// let numero = 0;
// let somma = 0;
// let i = 0;

// for(var j = 0; j < 5; j++){
//     somma += (numero = parseInt( prompt("Inserisci il numero n. " + (j + 1) ) ) );
//     document.getElementById("numero").innerHTML += "<li>" + numero + "</li>";
// }

// document.getElementById("somma").innerHTML = somma;
// console.log(somma);


// while(i < 5){
//     numero = parseInt( prompt("Inserisci il numero n. " + (i + 1) ) );
//     somma = somma + numero;
//     i++;
// }
// document.getElementById("somma").innerHTML = somma;
// console.log(somma);

//-----------------------------------------------------------------------------
//SNACK 8
/*
* 
* Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e 
* una lista di cognomi, Gatsby vuole generare una falsa lista di 8 invitati.
* Stampiamo la lista in modo ordinato in html come elementi <li> figli di un unico <ul>.
* 
*/

// let listaNomi = ["Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];
// let listaCognomi = ["Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"];


// for(var i = 0; i < 8; i++){
//     let randomNomi = Math.floor(Math.random()*listaNomi.length);
//     let randomCognomi = Math.floor(Math.random()*listaCognomi.length);
//     let invitatiFalsi = listaNomi[randomNomi] + " " + listaCognomi[randomCognomi];
//     document.getElementById("invitati").innerHTML += "<li><strong>" + invitatiFalsi + "</strong></li>";
// }

//-----------------------------------------------------------------------------
//SNACK 9
/*
*  A)
*   Crea due array che hanno un numero di elementi diversi (di almeno 6 elementi).
*   Aggiungi elementi casuali all'array che ha meno elementi, fino a quando ne avrà 
*   tanti quanti l'altro.
* 
*  B)
*  Mostriamo in HTML le due liste in parallelo
*/

// let numeriPari = [2, 4, 6, 8, 10, 12, 14, 20];
// let numeriDispari = [3, 15];

// do{
//     let randomNum = Math.floor(Math.random()*100);
//     if(randomNum % 2 != 0){
//         numeriDispari.push(randomNum);
//     }

// } while(numeriDispari.length < numeriPari.length);

// numeriDispari.sort(function(a, b){return a-b}); //ordine i numeri dispari

// document.getElementById("numeri-dispari").innerHTML = "<li>Numeri dispari: <br></li>";
// document.getElementById("numeri-pari").innerHTML = "<li>Numeri pari: <br></li>";

// for(var i = 0; i < numeriPari.length; i++){
//     document.getElementById("numeri-pari").innerHTML += "<li>" + numeriPari[i] + "</li>";
//     document.getElementById("numeri-dispari").innerHTML += "<li>" + numeriDispari[i] + "</li>";
// }

// console.log(numeriPari);
// console.log(numeriDispari);