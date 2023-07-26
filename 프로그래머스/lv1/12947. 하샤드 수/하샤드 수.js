function solution(number) {
   let sum = number
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

   return number % sum === 0 ? true : false;
}