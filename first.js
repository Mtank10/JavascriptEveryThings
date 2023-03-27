//reduce function
//Collect books from array of objects and return collection of books as an array.

let friends =[
    {
    name:'Shivam',
    book:['harry potter','java','react'],
    age:21
    },
     {
    name:'Vishnu',
    book:['python','java','react'],
    age:21
    },
    {
        name:'Nishant',
        book:['harry potter','java','Nodejs'],
        age:21
        },
         {
    name:'Bitty',
    book:['javascript','R language','spring'],
    age:21
    },
]
// let books=friends.reduce((prev,curr)=>{
//      return [...prev,...curr.book];
// },[])
// console.log(books)
//array from array of object 
// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
// let arr=objArray.map((a)=>a.foo);
// console.log(arr);
// let n=friends.map((a)=>a.book.forEach((b)=>{
//  console.log(b)
// }));
// console.log(n)

//Print all duplicate element from the array.//Pint no duplicate element
// let arr=[1,1,2,4,5,6,7,5,4,3,8];
// let rst=arr.filter((a,index)=>{
//    return arr.indexOf(a)===index;
// })
// console.log(rst);

//Remove duplicates from an array and return unique values in O(n) complexity with sorted order.
// let arr=[1,1,2,4,5,6,7,5,4,3,8];
// function unique(arr){
// let items={};
// arr.forEach((item)=>{
//     if(!items[item]){
//          items[item]=item;
//     }
// });
// return Object.values(items)
// }
// console.log(unique(arr))


//find Nth largest element in array.
// let arr=[200,39,59,79,39,277];
// arr.sort((a,b)=>a-b);
//  let rst=arr[arr.length-3];
// console.log(rst)

//Find the missing number from sorted array with O(n) complexity.
// let arr=[1,2,3,4,5,6,8,9];

//Find the frequecy of element in array.
// let arr=["hello","world","java","hello","java"];
// function coutnFreq(arr1){
//     let count={};
//    arr1.forEach((element) => {
//       if(count[element]){
//         count[element]++;
//       }else{
//         count[element]=1;
//       }
//    });
//    return count;
// }
// console.log(coutnFreq(arr));

//Group items on the basis of age of given array of object
// let a=[
//     {name:"shivam",
//       age:21
//      },
//      {name:"shivam",
//       age:20
//      },
//      {name:"shivam",
//       age:23
//      },
//      {name:"shivam",
//       age:21
//      }
// ]
// let age1=a.map((a)=>a.age)
// console.log(age1)
// let a=[1,2,3,4,5,6,7,8,10];
// let n=a.length+1;
// let totalSum=(n*(n+1))/2;
// console.log(totalSum);
// let sum=0;
// a.forEach((s)=>sum+=s)
// console.log(totalSum-sum);

//Find the missing number from unsorted array with O(n) complexity
let a=[2,7,8,5,1,4,3,6];
function missing(a){
    let sum=1;
    let l=a.length;

    for(let i=2;i<=l+1;i++){
        sum=sum+i;
        sum=sum-a[i-2];
    }
    return sum;
}
console.log(missing(a));