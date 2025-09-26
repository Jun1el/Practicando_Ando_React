const person = {
    nombre: 'Andres',
    uid: '1234',
    key: 'Spiderman',
    edad: 30
};
// const name2 = person.nombre;
const { nombre, uid, key, edad } = person;

console.log(nombre, uid, key, edad);

interface heroe {
    nombre: string;
    edad: number;   
    uid: string;
    rango?: string;
}

const useContext = ({nombre,edad,uid}: heroe) => {
    return {
        uid: uid,
        user: {
            nombre,
            edad,
        }
    }
} 
const {uid: userId}= useContext(person);
console.log(userId);
const context = useContext(person);
console.log(context);
console.log(useContext(person).user.nombre);