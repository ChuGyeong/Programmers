function solution(arr, queries) {
   return queries.reduce((acc, cur) => {
      const arr2 = [...acc];
      const [to, from, val] = cur;
      return arr2.map((el, elIdx) => {
         if (elIdx >= to && elIdx <= from) {
            if (elIdx % val === 0) return el + 1;
         }
         return el;
      });
   }, arr);
}