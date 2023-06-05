function solution(s1, s2) {
   let answer = 0;
   s1.forEach(s1 => {
      s2.forEach(s2 => {
         if (s1 === s2) {
            answer++;
         }
      });
   });
   return answer;
}