function solution(n) {
   let answer = 0;
   for (i = 0; i <= n; i++) {
      let cnt = 0;
      for (j = 0; j <= i; j++) {
         if (i % j == 0) {
            cnt += 1;
         }
      }
      if (cnt > 2) {
         answer += 1;
      }
   }
   return answer;
}