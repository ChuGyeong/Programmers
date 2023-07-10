function solution(n) {
   let answer = [];
   for (let i = n; i > 0; i--) {
      if (n % i === 1) {
         answer.push(i);
      }
   }
   return Math.min(...answer);
}