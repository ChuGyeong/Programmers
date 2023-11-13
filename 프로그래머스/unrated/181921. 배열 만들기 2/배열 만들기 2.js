function solution(l, r) {
  const answer = [];
  for (let num = l; num <= r; num++) {
    if (String(num).split('').every(digit => digit === '0' || digit === '5')) {
      answer.push(num);
    }
  }
  if (answer.length === 0) {
    return [-1];
  } else {
    return answer.sort((a, b) => a - b);
  }
}