function solution(x, n) {
   let answer = [];
   for (let i = 0; i <= n; i++) {
      answer = [...answer, x * i];
   }
   return answer.splice(1);
}