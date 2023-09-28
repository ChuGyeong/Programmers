function solution(numbers) {
   const num = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
   };

   let answer = '',
      str = '';

   for (let i = 0; i < numbers.length; i++) {
      str += numbers[i];

      if (str in num) {
         answer += num[str];
         str = '';
      }
   }

   return parseInt(answer);
}