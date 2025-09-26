import {personajesOnePiece} from "./03-objects";

function saludo(name: string): string {
    return `Hola ${name}`;
}

const saludo2 = (name: string): string => `Hola ${name}`;

const message = saludo("La Torre");
const message2 = saludo2("La Torre");
console.log(saludo("Andres"), message , message2);

function getUser(OnePiecePersonaje: { nombre: string }) {
    return personajesOnePiece.find(personaje => personaje.nombre == OnePiecePersonaje.nombre);
}

const getUser2 = (OnePiecePersonaje: { edad: number }) => personajesOnePiece.find(personaje => personaje.edad == OnePiecePersonaje.edad);


const user = getUser({ nombre: "Jimbe" });
console.log(user);

const user2 = getUser2({ edad: 19 });
console.log(user2);

const MyNumbers = [1,2,3,4,5];
/*MyNumbers.forEach(function(value){
   console.log(value);
})
*/
MyNumbers.forEach((n) =>
   console.log(n)
)
//MyNumbers.forEach(console.log);