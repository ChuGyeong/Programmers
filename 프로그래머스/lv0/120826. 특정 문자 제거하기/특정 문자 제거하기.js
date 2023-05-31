function solution(my_string, letter) {
   let answer = '';
   my_string = my_string.split('').filter(x => x !== letter);
   answer = my_string.join('');
   return answer;
}