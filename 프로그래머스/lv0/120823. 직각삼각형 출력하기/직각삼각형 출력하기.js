const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = 0;

rl.on('line', function (line) {
  input = Number(line);
}).on('close', function () {
  for(let i=1;i<=input;i++){
      const stars = '*'.repeat(i)
      console.log(stars)
  }
})
