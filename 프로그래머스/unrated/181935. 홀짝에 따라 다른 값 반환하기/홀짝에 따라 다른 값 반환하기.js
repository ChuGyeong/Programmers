function solution(n) {
   let answer = 0;
   for (let i = n % 2 === 0 ? 0 : 1; i <= n; i += 2) {
      if (n % 2 === 0) {
         answer += Math.pow(i, 2);
      } else {
         answer += i;
      }
   }
   return answer;
}