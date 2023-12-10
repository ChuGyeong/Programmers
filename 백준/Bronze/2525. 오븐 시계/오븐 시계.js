const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
let [h, m] = input[0].split(' ').map(Number);
let N = +input[1] + m;

while (N > 59) {
        h += 1;
        if (h > 23) h = 0;
        N -= 60;
}
console.log(`${h} ${N}`);