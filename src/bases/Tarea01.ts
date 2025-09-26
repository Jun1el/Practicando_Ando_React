
const useState = (value: string) =>{
    return [value,(newValue: string) => {console.log(newValue)}] as const;
}

const [value, setValue] = useState("Goku");
console.log(value);
setValue("Vegeta");