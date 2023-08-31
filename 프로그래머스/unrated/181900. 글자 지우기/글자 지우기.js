function solution(my_string, indices) {
   return [...my_string]
      .map((item, idx) => (indices.includes(idx) ? '*' : item))
      .filter(item => item !== '*')
      .join('');
}