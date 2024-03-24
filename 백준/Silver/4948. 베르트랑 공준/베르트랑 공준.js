let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

function isPrime(num) {
        if(num===1) return false;
        for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
            if(num%i===0) return false;
        }
        return true;
    };

for(let i=0; i<input.length; i++){
    if(input[i]===0) break;
    
    let count = 0;
    for(let j=input[i]+1; j<=input[i]*2; j++){
        if(isPrime(j)) count++;
    };
    console.log(count);
}