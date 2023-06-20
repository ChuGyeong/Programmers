function solution(ineq, eq, n, m) {
   let answer = 0;
   if (eq === '=' && ineq === '>') answer = n >= m;
   else if (eq === '=' && ineq === '<') answer = n <= m;
   else if (eq === '!' && ineq === '<') answer = n < m;
   else answer = n > m;

   return answer ? 1 : 0;
}