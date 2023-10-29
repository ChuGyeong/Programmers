function solution(n) {
  let answer = 0;
  let start = 1;
  let sum = 0;

  for (let end = 1; end <= n; end++) {
    sum += end;

    while (sum > n) {
      sum -= start;
      start++;
    }

    if (sum === n) {
      answer++;
    }
  }

  return answer;
}
