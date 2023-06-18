function solution(str) {
   return str
      .split('')
      .map(item => (item === item.toUpperCase() ? item.toLowerCase() : item.toUpperCase()))
      .join('');
}