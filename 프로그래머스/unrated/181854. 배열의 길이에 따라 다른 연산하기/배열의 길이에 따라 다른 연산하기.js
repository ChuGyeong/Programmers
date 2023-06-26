function solution(arr, n) {
   let answer = [];
   return arr.length % 2 === 0
      ? arr.map((item, idx) => (idx % 2 === 1 ? item + n : item))
      : arr.map((item, idx) => (idx % 2 === 0 ? item + n : item));
}