function solution(A, B) {  
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      return count;
    }
    
    A = goRight(A);
    count++;
  }
  
  return -1;
}

function goRight(str) {
  return str[str.length - 1] + str.slice(0, str.length - 1);
}