export class A{
    name:string ="hi";
    age:number = 20;

    getName(id:string): string {
        return id === "1" ? "John Doe" : "Jane Smith";
    }
}

// export function getName(id:string): string {
//     return id === "1" ? "John Doe" : "Jane Smith";
// }

export function getHomeDetails(id:string): string {
    return id === "1" ? "New York" : "Los Angeles";
}