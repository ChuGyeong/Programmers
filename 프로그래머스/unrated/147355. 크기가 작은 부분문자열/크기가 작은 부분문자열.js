function solution(t, p) {
   let answer = [];
   for (let i = 0; i < t.length; i++) {
      answer.push(t.substring(i, i + p.length));
   }
   return answer.filter(item => item <= p && item.length === p.length).length;
}