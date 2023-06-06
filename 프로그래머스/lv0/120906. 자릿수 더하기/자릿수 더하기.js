function solution(n) {
   let answer = n.toString().split('');
   let num = 0;
   for (let i = 0; i < answer.length; i++) {
      num += Number(answer[i]);
   }
   return num;
}