import {getHomeDetails,A} from '../export/class1';

const obj = new A();

function getDeatils(id: string): void {
    console.log(obj.getName(id));
    console.log(getHomeDetails(id));
}

getDeatils("1");
getDeatils("2");