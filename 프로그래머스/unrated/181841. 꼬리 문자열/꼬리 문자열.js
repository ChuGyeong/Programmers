function solution(str_list, ex) {
   let answer = [];
   str_list.forEach(item => {
      if (!item.includes(ex)) {
         answer.push(item);
      }
   });
   return answer.join('');
}