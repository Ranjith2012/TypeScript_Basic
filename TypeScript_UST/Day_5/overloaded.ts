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

interface EcomApp {
    products: {
        (id: number): string; 
        (name: string): string;
    };
}

const product1: EcomApp = {
    products: (idOrName: number | string): string => { 
        if (typeof idOrName === "number") {
            return `ID of product is ${idOrName}`;
        } else {
            return `Product name is ${idOrName}`;
        }
    }
};

console.log(product1.products(101)); 
console.log(product1.products("Laptop")); 