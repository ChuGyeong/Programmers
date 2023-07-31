function solution(d, budget) {
   let result = 0;
   let answer = [];

   d.sort((a, b) => a - b).forEach(item => {
      if (result + item <= budget) {
         result += item;
         answer.push(item);
      }
   });

   return answer.length;
}