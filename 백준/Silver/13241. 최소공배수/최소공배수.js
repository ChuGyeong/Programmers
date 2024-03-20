const fs = require('fs');

const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function gcd(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

console.log(lcm(A, B));