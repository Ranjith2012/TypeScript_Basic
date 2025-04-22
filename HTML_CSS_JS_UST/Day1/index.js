function btnclick(){
    alert('Hi team click here')
}
// let is keyword used to declare the variable
let a=10;
let b=5;
const c =90;
/*
console.log("sum of ",a+b);
console.log("Sum of "+a+" and "+b+" is "+(a+b));
console.log(`Sum of ${a} and ${b} is ${a+b}`);
*/
let val =true;

let arr = ["hello",48,true,3.0]
/*
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(const n in arr){
    console.log(arr[n]);
}

for(const n of arr){
    console.log(n);
}
*/

arr.push("jira");
arr.push(50);
arr.pop();

// arr.forEach(
//     (e)=>{
//         console.log(e);
//     }
// );

// arr.filter((e)=>e.toString().startsWith('h'))
//     .forEach((e)=>console.log(e))

arr.filter((e)=> Number.isInteger(e))
    .map((e)=> e*10)
    .forEach((e) => console.log(e));

// let obj ={
//     name: "Hi my name",
//     age: 23,
//     salary: 80000,
//     lang: ["java","python"]
// }
// console.log(...obj.lang,"playwright");
// console.log(obj)

function reverse(a) {
    console.log(a.split('').reverse().join(''));
}

reverse("today");

((e)=>console.log())();

function rec(a){
    if(a==10){
        return;
    }
    console.log(a)
    rec(a+1);
}

rec(1);


