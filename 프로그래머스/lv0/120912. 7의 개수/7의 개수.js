function solution(array) {
   let answer = 0;
   answer = array
      .map(
         num =>
            num
               .toString()
               .split('')
               .filter(item => item === '7').length,
      )
      .reduce((acc, cur) => acc + cur);
   return answer;
}
