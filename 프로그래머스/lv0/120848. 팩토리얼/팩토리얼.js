function solution(n) {
  let fac = 1;
  let i = 1;

  while (fac <= n) {
    fac *= i;
    i++;
  }

  return i - 2;
}