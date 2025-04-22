export interface Details {
    id: number;
    description: string;
    completed: boolean;
}

export let values: Details[] = [];

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