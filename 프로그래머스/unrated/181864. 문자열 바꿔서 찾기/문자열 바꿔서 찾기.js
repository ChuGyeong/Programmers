function solution(myString, pat) {
   let text = '';
   let answer = 0;
   answer = myString.split('');
   for (let i = 0; i < answer.length; i++) {
      if (myString[i] === 'A') {
         text += 'B';
      } else if (myString[i] === 'B') {
         text += 'A';
      }
   }
   return text.includes(pat) ? 1 : 0;
}