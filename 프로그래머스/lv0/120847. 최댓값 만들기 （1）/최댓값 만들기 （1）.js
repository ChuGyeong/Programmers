function solution(numbers) {
   let answer = 0;
   numbers.sort(function (a, b) {
      if (a > b) {
         return -1;
      }
      if (a < b) {
         return 1;
      }
      return 0;
   });
   answer = numbers[0]*numbers[1]
   return answer;
}