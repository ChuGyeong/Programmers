function solution(n) {
   let answer = [];
   let txt = '수박'.split('');

   for (let i = 0; i < n; i++) {
      if (i % 2 === 1) {
         answer.push(txt[1]);
      } else {
         answer.push(txt[0]);
      }
   }
   return answer.join('');
}