function solution(array) {
   let answer = [];
   let arr = [...array].sort(function (a, b) {
      if (a > b) {
         return -1;
      }
      if (a < b) {
         return 1;
      }
      return 0;
   });
   let x = arr[0];
   let y = array.indexOf(x);
   return (answer = [x, y]);
}