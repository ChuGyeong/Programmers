function solution(a, b) {
   let answer = 0;
   if (a % 2 === 1 && b % 2 === 1) {
      answer = a * a + b * b;
   } else if (a % 2 === 1 || b % 2 === 1) {
      answer = 2 * (a + b);
   } else if (a % 2 === 0 && b % 2 === 0) {
      answer = a - b;
   }
   return Math.abs(answer);
}