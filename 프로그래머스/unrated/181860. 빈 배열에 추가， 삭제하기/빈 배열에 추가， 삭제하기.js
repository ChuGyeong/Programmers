function solution(arr, flag) {
  return flag.reduce((X, f, i) => {
    if (f) X.push(...Array(arr[i] * 2).fill(arr[i]));
    else X.splice(-arr[i]);
    return X;
  }, []);
}