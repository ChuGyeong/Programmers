function solution(cipher, code) {
   let answer = cipher.split('');
   let text = [];
   for (let i = -1; i < answer.length; i += code) {
      text.push(answer[i]);
   }
   return text.join('');
}