// // Array methods
// forEach();
// Map();
// filter();
// reduce();
// slice();
// splice();
// sort();
// concat();
// fill();
// includes();
// join();
// reverse();
// pop();
// push();
// unshift();
// shift();
// indexOf();
// lastIndexOf();
// every();
// some();
// find();
// findIndex();
// Array.from();
// Array.isArray();
// flat();

//forEach method
// const numbers=[1,2,3,4,5];
//one use
// numbers.forEach((item,index,arr)=>{
//      console.log(index,item,arr);
// });
//another use
// let sum=0;
// numbers.forEach(item => {
//     sum+=item;
// })
// console.log(sum);
//another use
// const letters=['a','b','c','a','b','c','d','a'];
// let count={};
// letters.forEach(item=>{
//      if(count[item]){
//         count[item]++;
//      }else{
//         count[item]=1;
//      }
// })
// console.log(count);
//change the value of old array using foreach method
// let a=[12,3,4,5,6];
// a.forEach((item,index)=>{
//     a[index]=item*2;
// })
// console.log(a);

//Map function **********
// map create the new array instead update old value
const number =[1,2,3,4,5];
// const numbersSquare =number.map((item)=>{
//      return item*2;
// })
// console.log(numbersSquare)
// number.map(item=>{
//     console.log(item);
// })
// number.map((item,index)=>{
//     number[index]=item*2;
// })
// console.log(number);
// const products=[
//     {
//         name:'laptop',
//         price:1000,
//         count:5
//     },
//     {
//         name:'destop',
//         price:1500,
//         count:2
//     },
//     {
//         name:'phone',
//         price:500,
//         count:10
//     },
// ]
// const totalProductive=products.map(item=>
//     ({name:item.name,
//         totalValue:item.price=item.price*item.count}));
// console.log(totalProductive)
////convert string number in array number
// const numbers=['1','2','3','4','5','6'];
// const number1=numbers.map(item=>Number(item));
// console.log(numbers.length);


//filter function***********
// const numbers =[1,2,3,4,5,6];

// const even=numbers.filter(isEven)
// function isEven(value){
//     return value%2===0;
// }
// console.log(even);

// const people=[
//     {
//         name:'Florin',
//         age:26
//     },
//     {
//         name:'lvan',
//         age:18,
//     },
//     {
//         name:'Jai',
//         age:15
//     }
// ];
// const adults=people.filter(person=>person.age>=18);
// console.log(adults);
// const numbers=[1,2,3,4,5,3,2,1,4,5];
// const nums=numbers.filter((value,index,arr)=>{
//     return arr.indexOf(value)===index;
// });
// console.log(nums)
//reduce function ***********
// const numbers=[1,2,3,4,5,6];
// // const total=numbers.reduce(callback,initailValue)
// const total=numbers.reduce(sum,1);
// // function sum(accumulator,value,index,arr){

// // }
// function sum(accumulator,value){
//     return accumulator+value;
// }
// console.log(total);
//max number from reduce
// const numbers=[1,2,5,3,7,34,89,67,98]
// const max=numbers.reduce((accumulator,value)=>{
//     if(accumulator>value){
//         return accumulator;
//     }else{
//         return value;
//     }
// },-Infinity)
// console.log(max);

//array of object;
// const store=[
//     {
//         product:'laptop',
//         value:1000,
//         count:3,
//     },
//     {
//         product:'desktop',
//         value:1500,
//         count:4,
//     },
//     {
//         product:'mobile',
//         value:500,
//         count:10
//     }
// ];
// const totalValueStore=store.reduce((acc,item)=>{
//   return acc+(item.value*item.count);
// },0)
// console.log(totalValueStore);

//slice method *********
// const numbers=[1,2,3,4,5];
// const numbers2=numbers.slice(-5);//we can put NaN,true,false,undefine//method not modify
// console.log(numbers);
// console.log(numbers2);
// const parti=['shivam','raj','vishnu','roshan','nishat'];
// const won=parti.slice(0,4)
// console.log(won)

//splice method *******
// const numbers=[1,2,3,4,5];
// const delet=numbers.splice(2,3,5,6,7);//index from to delete and how manu item is to delete second parameter and third and new items
// console.log(delet,numbers);

//sort method **********
// const names=['shivam','ana','jhana','phin'];
// names.sort();
// console.log(names);
// const numbers=[4,6,32,8,566,2134,55];
// numbers.sort(compareFunction);
// function compareFunction(a,b){
//     return a-b;
// }
// console.log(numbers);

// const store=[
//         {
//             product:'laptop',
//             value:1000,
//             count:3,
//         },
//         {
//             product:'desktop',
//             value:1500,
//             count:4,
//         },
//         {
//             product:'mobile',
//             value:500,
//             count:10
//         }
//     ];
//     store.sort((a,b)=>{
//         return b.value-a.value;
//     })
//     console.log(store);

const a=[1,2,3];
const b=[4,5,6];
const d=[7,8,9];
