import {getHomeDetails,A} from '../export/class1';
import { addproduct,listTasks } from '../export/addProduct';  

const obj = new A();

function getDeatils(id: string): void {
    console.log(obj.getName(id));
    console.log(getHomeDetails(id));
}

getDeatils("1");
getDeatils("2");

function callProduct(){
    addproduct("Product 1");
    addproduct("Product 2");
    listTasks();
}

callProduct();