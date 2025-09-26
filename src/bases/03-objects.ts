export interface persona{
    firstname: string;
    lastname: string;
    age: number;

    address?: {
        street: string;
        number: number;
    }
}

const ironman: persona = {
    firstname: "Tonny",
    lastname: "Stark",
    age: 45, 
    address: {
        street: "Malibu",
        number: 10880,
    }
}
console.log(ironman);

export interface OnePiecePersonaje{
    
    nombre: string;
    tripulacion: string;
    frutaDelDiablo?: string;
    raza: string;
    edad: number;
    ciudadNatal?: CiudadNatal;
}
interface CiudadNatal {
    ciudad: string;
    ubicacion: string;
}
const luffy: OnePiecePersonaje = {
    nombre: "Monkey D. Luffy",
    tripulacion: "Sombrero de Paja",
    frutaDelDiablo: "Gomu Gomu no Mi",
    raza: "Humano",
    edad: 19,
    ciudadNatal: {
        ciudad: "Foosha Village",
        ubicacion: "East Blue"
    }
}
const sanji: OnePiecePersonaje = {
    nombre: "Vinsmoke Sanji",
    tripulacion: "Sombrero de Paja",
    frutaDelDiablo: "Ninguna",
    raza: "Humano",
    edad: 21,
}
const jimbе: OnePiecePersonaje = {
    nombre: "Jimbe",
    tripulacion: "Sombrero de Paja",
    frutaDelDiablo: "Ninguna",
    raza: "Gyojin",
    edad: 44
}
console.log(luffy, sanji, jimbе);
export const personajesOnePiece: OnePiecePersonaje[] = [luffy, sanji, jimbе];