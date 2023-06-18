function solution(my_string) {
   let answer = [];
   return (answer = my_string
      .split('')
      .map(item => Number(item))
      .filter(item => !isNaN(item))
      .sort());
}