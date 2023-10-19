function solution(s) {
  let cnt = 0;

  for (let paren of s) {
    cnt += paren === "(" ? 1 : -1;
    if (cnt < 0) return false;
  }

  return cnt === 0;
}