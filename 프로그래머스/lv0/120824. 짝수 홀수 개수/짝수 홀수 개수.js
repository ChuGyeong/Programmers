function solution(num_list) {
   let answer = [];
   let cnt = 0;
   num_list.forEach(item => {
      if (item % 2 === 0) {
         cnt++;
      }
   });
   answer = [cnt, num_list.length - cnt];

   return answer;
}