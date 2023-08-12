/* 
function solution(i, j, k) {
   let count = 0;
   for (let num = i; num <= j; num++) {
      let temp = num;
      while (temp > 0) {
         if (temp % 10 === k) {
            count++;
         }
         temp = Math.floor(temp / 10);
      }
   }
   return count;
}
*/

function solution(i, j, k) {
   let count = 0;
   for (let num = i; num <= j; num++) {
      const filterArr = num
         .toString()
         .split('')
         .filter(item => item === k.toString());
      count += filterArr.length;
   }
   return count;
}