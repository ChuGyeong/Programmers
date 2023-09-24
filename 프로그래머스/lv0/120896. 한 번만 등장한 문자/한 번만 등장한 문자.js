function solution(s) {
  return [...s].filter((item, idx, arr) => arr.indexOf(item) === arr.lastIndexOf(item)).sort().join('');
}