function solution(arr, delete_list) {
   const answer = [];

   for (let item of arr) {
      if (!delete_list.includes(item)) {
         answer.push(item);
      }
   }

   return answer;
}