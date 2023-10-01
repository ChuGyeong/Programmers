function solution(strArr) {
   const answer = {};

   for (const str of strArr) {
      const len = str.length;
      answer[len] = (answer[len] || 0) + 1;
   }

   return Math.max(...Object.values(answer));
}