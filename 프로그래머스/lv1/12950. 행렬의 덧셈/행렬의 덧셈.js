function solution(arr1, arr2) {
   return arr1.map((arr, idx) => arr.map((num, index) => num + arr2[idx][index]));
}
