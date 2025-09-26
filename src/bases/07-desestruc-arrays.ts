const charactersNames = ["Goku", "Vegeta", "Trunks"];

console.log(charactersNames[1]);

const [,,a1] = charactersNames;
console.log(a1);

const returnArray = () => {
    return charactersNames.slice(2);
}

console.log(returnArray());