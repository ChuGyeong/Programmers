let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
let notListened = new Set(input.slice(1, N+1));
let notSeen = input.slice(N+1);

let answer = [];

for (let i = 0; i < M; i++){
  if (notListened.has(notSeen[i])){
    answer.push(notSeen[i]);
  }
}

answer.sort();
console.log(answer.length);
console.log(answer.join('\n'));