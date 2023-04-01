// let c=0;

// let id = setInterval(() => {
// 	console.log(c++)//
// },200)

// setTimeout(() => {
// 	clearInterval(id)
// },2000)

// let a = true;
// let c = 0;

// setTimeout(() => {
// 	a = false;
// },2000)

// while(a){
// 	console.log('Hello')//hello,hello
// }

// for(let i = 1; i < 6; i++) {
//     setTimeout(function() {
//        console.log(i);
//     },1000);
//   }
//   console.log('The loop is done!');
// console.time('myTimer');
// for(var i = 1; i < 6; i++) {
//    console.log('Loop Number' + i); // added this
//    setTimeout(()=>{
//       console.log(i);
//    },1000);
// }
// console.log('The loop is done!');
// console.timeEnd('myTimer');
// for(var i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//     },0);
//  }
//  console.log('The loop is done!');
// for(var i = 1; i < 6; i++) {
//     function timer(){ // create a unique function (scope) each time
//        var k = i; // save i to the variable k which
//        setTimeout(()=>{
//           console.log(k);
//        },1000);
//     }
//     timer();
//  }

// function loopDone() {
//     console.log('The loop is done!');
//  }
//  for(let i = 1; i < 6; i++) {
//     setTimeout(()=>{
//        console.log(i);
//        if(i === 5){ 
//           loopDone();
//        }
//     },i * 1000); // multiple i by 1000
//  }


// function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () =>{
// 	console.log(this.name)
// }

// let personObj = {
// 	name:"Tony",
// 	print:getName1
// }

// personObj.print();
// personObj.getName2();

// function getName1(){
// 	console.log(this.name);
// }

// Object.prototype.getName2 = () =>{
//   console.log(Object.getPrototypeOf(this).name);
// }

// let personObj = {
// 	name:"Tony",
// 	print:getName1
// }

// personObj.print();
// Object.prototype.name="Steve";
// personObj.getName2();

// function mul(x) {
// 	return function(y) {
// 		return function(z) {
// 			return function(w) {
// 				return function(p) {
// 					return x * y * z * w * p;
// 				};
// 			};
// 		};
// 	};
// }
// console.log(mul(2)(3)(4)(5)(6));

// function mul(x,z){
// 	return function(y){
// 		return x*y;
// 	}
// }
// console.log(mul(2)(3));

// function mul(x) {
// 	return function(y) {
// 		return {
// 			result: x * y,
// 			sum: function(z) {
// 				return x * y + z;
// 			}
// 		};
// 	};
// }
// console.log(mul(2)(3).result);
// console.log(mul(2)(3).sum(4));

// function mul(x){
// 	return function(y){
// 		return [x*y, function(z){
// 			return x*y + z;
// 		}];
// 	}
// }
// // console.log(mul(2)(3)[0]);
// console.log(mul(2)(3)[1](4));
// function mul(x){
// 	return {
// 		name:"shivam",
// 		sum:function(y){
// 			return x*y;
// 		}
// 	}
// }
// console.log(mul(3).sum(2))

// function mul(x){
// 	return function(y){
// 		return [x*y,function(z){
// 			return x*y +z;
// 		}];
// 	}
// }
// console.log(mul(3)(5)[0])

// function getNumber(){
// 	return;
// }

// var numb = getNumber();
// console.log(numb);

function getNumber(){
	return [2,4,5];
}

var numb = getNumber();
console.log(numb);

