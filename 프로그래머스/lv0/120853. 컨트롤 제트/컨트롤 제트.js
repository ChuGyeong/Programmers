function solution(s) {
   let answer = 0;
   let lastAdded = 0;

   s.split(' ').forEach(item => {
      const num = parseInt(item);
      if (!isNaN(num)) {
         answer += num;
         lastAdded = num;
      } else if (item === 'Z') {
         answer -= lastAdded;
      }
   });

   return answer;
}