function solution(s) {
   let middle = Math.floor(s.length / 2);
   return s.length % 2 === 0 ? s.substring(middle - 1, middle + 1) : s[middle];
}