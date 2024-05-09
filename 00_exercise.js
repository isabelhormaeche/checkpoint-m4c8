// EJERCICIO

// Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”

var miLista = [
  "velma", 
  "exploradora", 
  "jane",
  "john",
  "harry"
  ]

  for (var i = 0; i < miLista.length; i++) {
      console.log(miLista[i]);
    }

// Output:
// "velma"
// "exploradora"
// "jane"
// "john"
// "harry"



// Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.

var miLista = [
"velma",
"exploradora",
"jane",
"john",
"harry"
];

var contador = 0;
while (contador < miLista.length) {
console.log(miLista[contador]);
contador++;
}
// Output:
// "velma"
// "exploradora"
// "jane"
// "john"
// "harry"




// Cree una función de flecha que devuelva "Hola mundo".

const greeting = () => "Hola mundo";

console.log(greeting()); 

// Output: "Hola mundo"