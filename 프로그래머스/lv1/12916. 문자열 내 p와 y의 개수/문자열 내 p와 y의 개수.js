function solution(s) {
   let pCnt = 0,
      yCnt = 0;
   s.split('').map(item =>
      item.toUpperCase() === 'P' ? (pCnt += 1) : item.toUpperCase() === 'Y' ? (yCnt += 1) : item,
   );
   return pCnt === yCnt ? true : false;
}