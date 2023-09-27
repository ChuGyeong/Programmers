function solution(arr) {
   const answer = arr.reduce((result, item, idx) => {
      if (item === 2) result.push(idx);
      return result;
   }, []);

   return answer.length > 0 ? arr.slice(answer[0], answer[answer.length - 1] + 1) : [-1];
}