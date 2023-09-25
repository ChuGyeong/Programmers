function solution(arr) {
  return arr.concat(Array(Math.pow(2, Math.ceil(Math.log2(arr.length))) - arr.length).fill(0));
}