function solution(my_string) {
   let answer = 0;
   let num = 0;
   answer = my_string.split('').filter(item => parseInt(item));

   for (let i of answer) {
      num += Number(i);
   }

   return num;
}