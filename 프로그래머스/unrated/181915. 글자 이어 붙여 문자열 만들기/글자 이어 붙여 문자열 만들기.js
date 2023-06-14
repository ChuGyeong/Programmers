function solution(my_string, index_list) {
   let answer = [];
   let x = my_string.split('');
   for (let item of index_list) {
      answer.push(x[item]);
   }
   return answer.join('');
}