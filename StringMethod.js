let stringOne = "freeCodeCamp is the best place to learn and is to the beauty"
let stringTwo = "frontend and backend development"

//charAt()
console.log(stringOne.charAt(1))

//charCodeAt()
console.log(stringOne.charCodeAt(1))

//concat()
console.log(stringOne.concat(stringTwo))

//endWith()
console.log(stringOne.endsWith("learn"))
console.log(stringTwo.startsWith("frontend"))
//fromCharCode()
console.log(String.fromCharCode(114))
//includes()
console.log(stringOne.includes('place'))
//indexOf()
console.log(stringOne.indexOf('is'))
//lastIndexOf();
console.log(stringOne.lastIndexOf('place'))

//match()
console.log(stringTwo.match(/end/g))

//repeat()
console.log(stringOne.repeat(2))

//replace()
// console.log(stringOne.replace('learn','skill'))
console.log(stringTwo.replace(/end/g,"END"))

//search()
console.log(stringOne.includes('place'))

//slice()
console.log(stringOne.slice(2,4))

//split()
console.log(stringOne.split(' '))
//substring()
console.log(stringOne.substring(2,7))

//toLowerCase()
console.log(stringOne.toLowerCase())
//toUpperCase()
console.log(stringOne.toUpperCase())

//trim()//left trim and right trim
console.log(stringOne.trim())