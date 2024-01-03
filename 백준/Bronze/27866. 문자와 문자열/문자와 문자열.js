const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let a = input[0].toString();
let b = Number(input[1]);

console.log(a[b - 1]);