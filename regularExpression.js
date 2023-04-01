// const names="The fat cat ran down the street. It was searching for a mouse to eat."

// console.log(names.match(/\s/g))//+ * ? .at t.. .\. \w \s
// console.log(names.match(/\w{3,5}/g))
// console.log(names.match(/[a-zA-Z0-9]n/g))
// console.log(names.match(/(t|e|r){2,3}\./g))

// console.log(names.match(/^T/g))//

let n="123-456-7891"
console.log(n.match(/\d{3}[ -]?\d{3}[ -]?\d{4}/g))