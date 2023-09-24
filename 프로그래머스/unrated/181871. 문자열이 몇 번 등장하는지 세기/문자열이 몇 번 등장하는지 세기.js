function solution(myString, pat) {
  let answer = 0, idx = -1;

  while ((idx = myString.indexOf(pat, idx + 1)) !== -1) {
    answer++;
  }

  return answer;
}