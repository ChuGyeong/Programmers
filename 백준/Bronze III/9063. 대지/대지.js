const fs = require('fs');
const [n, ...points] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(line => line.split(' ').map(Number));

const xs = points.map(point => point[0]);
const ys = points.map(point => point[1]);
const area = (Math.max(...xs) - Math.min(...xs)) * (Math.max(...ys) - Math.min(...ys));

console.log(area);
