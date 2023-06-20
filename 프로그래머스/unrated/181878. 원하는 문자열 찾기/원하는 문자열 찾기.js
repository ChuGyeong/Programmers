function solution(myString, pat) {
   let answer = 0;
   answer = myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
   return answer;
}