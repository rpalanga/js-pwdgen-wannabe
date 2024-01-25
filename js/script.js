const nome = prompt("Come ti chiami");

document.getElementById("Name").innerHTML = ` Il tuo nome è ${nome}`

// fine inserimento nome //

// insierimento cognome //

const surname = prompt("Indica il tuo congnome")

document.getElementById("Surname").innerHTML = ` Il tuo cognome è ${surname}`

// fine inserimento cognome //

// inserimento colore //

const color = prompt("Indica il tuo colore preferito")

document.getElementById("Color").innerHTML = `Il tuo colore preferito è ${color}`

// fine inserimento colore //

//  inserimento password //

const password = nome + surname + color + 23;

document.getElementById("Pass").innerHTML = `La tua password  è ${password}`







