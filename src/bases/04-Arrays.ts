const myArray: number[] = [1,2,3,4,5];
myArray.push(6);
for (const element of myArray) {
    console.log(element ** 2);
}
console.log(myArray.length);