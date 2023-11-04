function solution(number) {
  let count = 0;
  
  const getCombinations = (arr, selected, sum) => {
    if (selected.length === 3) {
      if (sum === 0) {
        count++;
      }
      return;
    }
    
    for (let i = 0; i < arr.length; i++) {
      const rest = arr.slice(i + 1);
      const next = sum + arr[i];
      getCombinations(rest, [...selected, arr[i]], next);
    }
  };
  
  getCombinations(number, [], 0);
  
  return count;
}