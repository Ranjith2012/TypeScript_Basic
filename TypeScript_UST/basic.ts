type Vendor1 = {
    id: number;
    name: string;
    lname?: string; // optional params ?
    productName: any; // don't know the type
    price: number;
  };
  
  const vendors1: Vendor1[] = [
    { id: 3, name: "Naveen", lname: "Kumar", productName: "Watch", price: 600 },
    { id: 1, name: "Vishal", productName: "Airpods", price: 750 },
    { id: 2, name: "Ranjith", lname: "Kumar", productName: "Tv", price: 800 },
  ];

  function sortvendors(): Vendor1[]{
    return vendors1.sort((a1,a2) => a1.id>a2.id ? -1 : 1)
  }

  sortvendors().forEach((e)=> 
    console.log(`Id ${e.id} name ${e.name}`));


  // It's show error certification issue
  
// function getFacts(url: string): Promise<Response> {
//     return fetch(url).then(res => res.json());
// }

// getFacts("https://cataas.com/cat?width=200;height=200;json=true").then(data => console.log(data));