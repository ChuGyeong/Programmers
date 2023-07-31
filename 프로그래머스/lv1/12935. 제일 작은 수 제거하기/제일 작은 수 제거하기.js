function solution(arr) {
   let numbers = [...arr];
   let min = numbers.sort((a, b) => b - a)[arr.length - 1];
   return arr.length <= 1 ? [-1] : arr.filter(item => item !== min);
}