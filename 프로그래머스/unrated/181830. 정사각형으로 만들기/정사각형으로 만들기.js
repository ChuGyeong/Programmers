function solution(arr) {
  if (arr.length > arr[0].length) {
    for (let i = 0; i < arr.length; i++) {
      while (arr[i].length < arr.length) {
        arr[i].push(0);
      }
    }
  }

  else if (arr[0].length > arr.length) {
    for (let i = arr[0].length - arr.length; i > 0; i--) {
      arr.push(Array(arr[0].length).fill(0));
    }
  }

  return arr;
}