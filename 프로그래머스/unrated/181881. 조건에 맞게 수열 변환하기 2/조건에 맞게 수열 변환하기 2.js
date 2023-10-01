function solution(arr) {
   let count = 0;
   while (true) {
      const newArr = arr.map(n => (n >= 50 && n % 2 === 0 ? n / 2 : n < 50 && n % 2 === 1 ? n * 2 + 1 : n));
      if (JSON.stringify(newArr) === JSON.stringify(arr)) break;
      arr = newArr;
      count++;
   }
   return count;
}