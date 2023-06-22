function solution(num_list) {
   let answer = [];
   return num_list.sort((a, b) => a - b).slice(5, num_list.length);
}