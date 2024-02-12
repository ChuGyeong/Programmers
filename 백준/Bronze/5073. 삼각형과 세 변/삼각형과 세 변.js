const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach(line => {
  let sides = line.trim().split(" ").map(Number).sort((a, b) => a - b);

  if (sides[0] === 0) return; // 모든 변의 길이가 0이면 종료

  if (sides[2] >= sides[0] + sides[1]) {
    console.log("Invalid");
  } else if (sides[0] === sides[1] && sides[1] === sides[2]) {
    console.log("Equilateral");
  } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
});