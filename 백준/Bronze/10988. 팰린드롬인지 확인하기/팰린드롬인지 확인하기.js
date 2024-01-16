const original = require("fs").readFileSync(0).toString().trim(); // "baekjoon"
const rev = original.split("").reverse().join("");
console.log(original === rev ? 1 : 0);