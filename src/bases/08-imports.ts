import {heroes, type Hero,Owner} from "./data/heroes.data";

const getHeroeById = (id: number): Hero|undefined => {
    const hero = heroes.find( (hero)=>{
        return hero.id === id;
    } )
    return hero;
}

console.log(getHeroeById(2));


const getHeroesByOwner = (owner: Owner): Hero[] => {
    return heroes.filter(hero => hero.owner === owner);
}

console.log(getHeroesByOwner(Owner.DC)); 