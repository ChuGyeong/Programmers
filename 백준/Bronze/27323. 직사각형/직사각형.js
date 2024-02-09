const [height, width] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(a => Number(a))
console.log(height * width)