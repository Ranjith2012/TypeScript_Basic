type Point = { name: string; age: number };
type a = keyof Point; 
let x:a;

interface Person{
    name: string;
    age: number;
    address: string;
    phone: string;
}

const person: Person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890"
};

//generic function to get data from object
function getData<T,K extends keyof T>(obj : T, key : K){
    return obj[key];
}


console.log(getData(person, "name")); 

//Reduce Function
function sum(...numbers: number[]):number{
    return numbers.reduce((t, num)=>t+num,0);
}

const result = sum(1,2,3,4,5);
console.log(result);