function solution(s) {
   return s
      .split(' ')
      .map(item =>
         item
            .split('')
            .map((string, idx) => (idx % 2 === 0 ? string.toUpperCase() : string.toLowerCase()))
            .join(''),
      )
      .join(' ');
}