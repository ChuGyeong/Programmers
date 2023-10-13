function solution(arr, queries) {
  const answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let minVal = Infinity;

    for (let j = s; j <= e; j++) {
      if (arr[j] > k && arr[j] < minVal) {
        minVal = arr[j];
      }
    }

    if (minVal === Infinity) {
      answer.push(-1);
    } else {
      answer.push(minVal);
    }
  }

  return answer;
}