function solution(arr1, arr2) {
  const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);

  if (arr1.length === arr2.length) {
    return sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
}