// 1
// const sayHello=(name)=>{
//     if (name == 'Mark') {
//         return(`Hi, ${name}!`);
//     }else{
//         return(`Hello, ${name}!`);
//     }
// }
// console.log(sayHello('Oleg'));
// console.log(sayHello('Victor'));
// console.log(sayHello('Mark'));


// function sayHello(name) {
//     if (name == 'Mark') {
//         return(`Hi, ${name}!`);
//     }else{
//         return(`Hello, ${name}!`);
//     }
// }
// console.log(sayHello('Oleg'));
// console.log(sayHello('Victor'));
// console.log(sayHello('Mark'));



// 2
// const hypotenyse = (n,m) =>{
//     return Math.sqrt(n*n+m*m);
// }
// console.log(hypotenyse(3,4));


// function hypotenyse(n,m) {
//     return Math.sqrt(n*n+m*m);
// }
// console.log(hypotenyse(3,4));



// 3
// const min=(a,b) =>{
//     if (a>b){
//         return(b);
//     }else{
//         return(a);
//     }
// }
// console.log(min(2,5));
// console.log(min(2,-1));
// console.log(min(1,1));


// function min(a,b) {
//     if (a>b){
//         return(b);
//     }else{
//         return(a);
//     }
// }
// console.log(min(2,5));
// console.log(min(2,-1));
// console.log(min(1,1));



// 4
// const isEven=(n) =>{
//     if(n % 2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(5));


// function isEven(n) {
//     if(n % 2==0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(5));



// 5
// const deleteChars=(str) =>{
//     return str.slice(1,-1);
// }
// console.log(deleteChars("Hello"));
// console.log(deleteChars("A"));


// function deleteChars(str) {
//     return str.slice(1,-1);
// }
// console.log(deleteChars("Hello"));
// console.log(deleteChars("A"));



// 6
// const someFn=(str) =>{
//     let a = str.toLowerCase();
//     let b = a.slice(1);
//     return str[0].toUpperCase() + b;
// }
// console.log(someFn("пиТеР"));
// console.log(someFn('javaScript'));


// function someFn(str) {
//     let a = str.toLowerCase();
//     let b = a.slice(1);
//     return str[0].toUpperCase() + b;
// }
// console.log(someFn("пиТеР"));
// console.log(someFn('javaScript'));



// 9
// const stringCutter=(str, numb)=>{
//     let a = str.length;
//     if (a > numb){
//     return str.substr(0, (numb)) + '...';
//     }else{
//         return str;
//     }
// }
// console.log(stringCutter('Привет мир!',6));


// function stringCutter(str, numb){
//     let a = str.length;
//     if (a > numb){
//     return str.substr(0, (numb)) + '...';
//     }else{
//         return str;
//     }
// }
// console.log(stringCutter('Привет мир!',6));