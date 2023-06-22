function solution(num_list) {
   let x = 0,
      y = 0,
      answer = 0;
   num_list.map((item, idx) => (idx % 2 === 0 ? (x += item) : (y += item)));
   x > y ? (answer = x) : (answer = y);
   return answer;
}