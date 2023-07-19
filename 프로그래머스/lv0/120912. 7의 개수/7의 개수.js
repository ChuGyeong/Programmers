function solution(array) {
   return array
      .map(
         num =>
            num
               .toString()
               .split('')
               .filter(item => item === '7').length,
      )
      .reduce((acc, cur) => acc + cur);
}