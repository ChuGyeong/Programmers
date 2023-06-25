function solution(n, t) {
  let count = n;
  for (let i = 0; i < t; i++) {
    count *= 2;
  }
  return count;
}