function solution(arr, k) {
  const nums = new Set();
  const answer = [];

  for (let num of arr) {
    if (!nums.has(num)) {
      nums.add(num);
      answer.push(num);

      if (answer.length === k) {
        return answer;
      }
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}