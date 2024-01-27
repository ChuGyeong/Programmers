let fs = require('fs');
let inputs = fs.readFileSync('/dev/stdin').toString().split(' ');
let number = Number(inputs[0]);
let base = Number(inputs[1]);
let answer = [];
let tmp = number;
while(tmp !== 0){
    answer.push(tmp % base);
    tmp = Math.floor(tmp/base);
}
answer = answer.reverse();
for(let i=0; i<answer.length; i++){
    if(answer[i]>=10 && answer[i]<=35){
        answer[i] = String.fromCharCode(answer[i]+55);
    }
}
console.log(answer.join('').trim());