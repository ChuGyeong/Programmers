function solution(my_string, n) {
   return [...my_string].splice(-n, my_string.length).join('');
}