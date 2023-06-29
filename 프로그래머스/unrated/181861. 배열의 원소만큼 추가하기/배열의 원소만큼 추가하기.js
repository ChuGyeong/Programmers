function solution(arr) {
   let answer = [];
   for (let i = 0; i < arr.length; i++) {
      const a = arr[i];
      answer = answer.concat(Array(a).fill(a));
   }
   return answer;
}