function solution(my_string, s, e) {
  const answer = my_string.split('');
  
  while (s < e) {
    [answer[s], answer[e]] = [answer[e], answer[s]];
    s++;
    e--;
  }
  
  return answer.join('');
}