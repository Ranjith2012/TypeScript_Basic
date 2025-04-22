type Point = { name: string; age: number };
type a = keyof Point; 
let x:a;
x = "name"; 
x = "age"; 

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

interface Employee{
    name: string;
    department: string;
    salary: number;
}

const newemp: Employee = {
    name: "Jane Smith",
    department: "Engineering",
    salary: 80000
}

//generic function to get data from object
function getData<T,K extends keyof T>(obj : T, key : K){
    return obj[key];
}


console.log(getData(person, "name")); 
console.log(getData(person, "age"));
console.log(getData(person, "address"));
console.log(getData(newemp, "name"));
console.log(getData(newemp, "department"));
console.log(getData(newemp, "salary"));

//Reduce Function
function sum1(...numbers: number[]):number{
    return numbers.reduce((t, num)=>t+num,0);
}

function addstring(...names: string[]):string{
    return names.reduce((t, name)=>t+name, "");
}

const result = sum1(1,2,3,4,5);
console.log(result);

const result1 = addstring("John", "Doe", "Smith");
console.log(result1);