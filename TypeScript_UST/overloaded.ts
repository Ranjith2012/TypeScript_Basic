interface employee{
    details:{
        (name : string):string;
        (age : number) :string;
    }
}

const emp: employee={
    details: (name: string | number): string => {
        if (typeof name === "string") {
            return `Name is ${name}`;
        } else {
            return `Age is ${name}`;
        }
    }
}

console.log(emp.details("John Doe"));
console.log(emp.details(30)); 

