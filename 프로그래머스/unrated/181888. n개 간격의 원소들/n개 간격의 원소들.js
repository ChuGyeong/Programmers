function solution(num_list, n) {
   let answer = [];

   num_list.map((item, idx) => {
      if (idx % n === 0) {
         answer.push(item);
      }
   });
   return answer;
}