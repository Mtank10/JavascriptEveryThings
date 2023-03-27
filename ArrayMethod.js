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

//concat method...
// const a=[1,2,3];
// const b=[4,5,6];
// const d=[7,8,9];
// const c=a.concat(b,d,a);
// // console.log(c);
// // c.push(4);
// console.log(c);//it is the shallow copy do not the change the original array.
// const p=a.concat(1,2,a);//add value also
// console.log(p)

//fill method ********
// function fillNumbers(n){
//     return Array(n).fill(0).map((_,idx)=>idx+1);
// }
// console.log(fillNumbers(10));

//include method .......****
// const fruits =['Apple','Mango'];
// const res=fruits.includes('Orange');
// if(res){
//     console.log('Yuppy');
// }else{
//     console.log("Sad... Let's buy an orange");
// }


//Join method ********
// const countries=['Romania','Usa',"india"];
// const countries1=['Romania','Usa',"india"];
// // const res=countries.join('-');
// const res=countries.join(countries1);
// console.log(res);
// const numbers=[1,2,4,5,6];
// // numbers.reverse(numbers);
// const rest=numbers.concat().reverse();
// console.log(rest)

// const str='Coding is fun!';
// const res=str.split('').reverse().join('');
// console.log(res);

//push method ******
// const numbers=[1,2,3,4];
// const total=numbers.push(4,5,6,7,8);
// console.log(total+","+numbers);

//pop method ****
// const numbers=[1,2,3];
// const lastItem=numbers.pop();
// console.log(lastItem)

//unshift method ********
// const numbers=[1,2,3];
// numbers.unshift(0,4);
// console.log(numbers)
//shift *****
// const numbers=[1,2,3];
// const fi=numbers.shift(1);
// console.log(numbers)

// //indexOf method lastIndexOf method****
// const n=['a','b','c','d','e','f','a'];
// const num=n.indexOf('aa');//begining of the array.
// const num1=n.lastIndexOf('a');//end of the array.
// console.log(num,num1);

//every method *****
// const n=[
//     {
//         name:'shi',
//     },
//     {
//         name:'shi'
//     },
//     {
//         name:'shi'
//     }
// ]
// const value=n.every(item=>item.name!==undefined)
// console.log(value);

// const arrys=[[1,2,3],[4,5,7],[123,4],"54"];
// const res=arrys.every(arr=>Array.isArray(arr));
// console.log(res);

//some method *******

// const numbers=[1,2,3,4];
// const n=numbers.some((item=>item>4));
// console.log(n);
// const persons=[
//     {
//         name:'shivam',
//         age:12
//     },
//     {
//        name:'ajay',
//        age:13,
//     },
//     {
//       name:'roan',
//       age:15}
// ]
// const res=persons.some((pers)=>pers.age>12);
// console.log(res);

//find method *****************//and findIndex method return index
// const persons=[
//         {
//             name:'shivam',
//             age:12
//         },
//         {
//            name:'ajay',
//            age:13,
//         },
//         {
//           name:'roan',
//           age:15}
//     ]
//     const res=persons.find((item)=>{
//         return item.name==='shivam';
//     })
//     console.log(res);

//from method ******
// const str="123456";
// // const res=Array.from(str,x=>Number(x));
// // function mapFn(x){
// //     return Number(x);
// // }

// console.log(res);

// const numbers=[1,2,3,4,5,6,7,8,92,3,4,53,2,3,5,32];
// const res=Array.from(new Set(numbers));
// console.log(res);
// const friends=['shivam','vishnu','ram','shivam'];
// const res=Array.from(new Set(friends));
// console.log(res);
