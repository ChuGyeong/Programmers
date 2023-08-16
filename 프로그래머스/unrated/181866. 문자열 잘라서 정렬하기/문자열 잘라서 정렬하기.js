function solution(myString) {
   return myString
      .split('x')
      .sort((a, b) => (a < b ? -1 : 1))
      .filter(item => item !== '');
}