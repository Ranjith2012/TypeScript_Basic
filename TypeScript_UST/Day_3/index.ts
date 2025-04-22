type data ={
  name : string;
  department :string;
  role?: any;
};

const data1:data[]=[{name:"rash",department:"EEE"},{name:"dude",department:"Duck"}];

data1.forEach((e)=>console.log(`Name${e.name}, ${e.department}`))


type roles ="trainer" | "dev"

interface User{
    name: string;
    role: roles;
}

class UserAccount{
    name: string;
    role:roles;

    constructor(name:string, role:roles){
        this.name = name;
        this.role = role;
    }

}

function main(){
    const user: User = new UserAccount("rash","dev");
    const user1: User = new UserAccount("rash","dev");
    console.log(user.name);
    console.log(user1.name);
}

main()

function sum(num: number | number[]){
    if(Array.isArray(num)){
        let sum: number =0;
        num.forEach(e => sum+=e);
        return sum;
    }
    return sum;
}
console.log(sum(4))
console.log(sum([1,2,3]))


interface vendorInt {
    id : number;
    name: string;
    location: string;
}

class Vendor implements vendorInt {
    id: number;
    name: any;
    location: string;
  
    constructor(id: number, name: any, location: string) {
      this.id = id;
      this.name = name;
      this.location = location;
    }
  
  }
  
  const vendors: Vendor[] = [
    new Vendor(3, "naveen", "covai"),
    new Vendor(1, "abden", "kochi"),
    new Vendor(2, "ranjith", "Covai")
  ];
  
  const sortedVendors = vendors.sort((a, b) => a.id > b.id ? -1 : 0);
  
  
  for (const vendor of sortedVendors) {
    console.log(`ID: ${vendor.id}, Name: ${vendor.name}, Location: ${vendor.location}`);
  }
  

//return type

function sortVen():Vendor[] {
  return vendors.sort((a, b) => a.id > b.id ? -1 : 0);
}

sortVen()





