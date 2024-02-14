const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split('\n').map(Number);

const n = inputData[0];

const perimeter = 4 * n;

console.log(perimeter);
