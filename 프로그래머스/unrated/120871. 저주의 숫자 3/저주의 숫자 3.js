function solution(n) {
  let count = 0;
  let num = 0;
  
  while (count < n) {
    num++;
    if (isInvalid(num)) {
      continue;
    }
    count++;
  }
  
  return num;
}

function isInvalid(num) {
  return num % 3 === 0 || num.toString().includes('3');
}