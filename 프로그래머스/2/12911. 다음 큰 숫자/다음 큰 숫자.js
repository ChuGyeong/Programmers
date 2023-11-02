function solution(n) {
  const target = n.toString(2).match(/1/g).length;
  let next = n + 1;
  while (next.toString(2).match(/1/g).length !== target) {
    next++;
  }
  return next;
}