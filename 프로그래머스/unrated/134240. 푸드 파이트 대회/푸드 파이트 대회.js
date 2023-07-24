function solution(food) {
   let answer = [];
   food
      .filter((item, idx) => idx !== 0)
      .forEach((item, idx) => {
         if (item > 1) {
            for (let i = 0; i < Math.floor(item / 2); i++) {
               answer = [idx + 1, ...answer];
            }
         }
      });
   let reanswe = answer.slice().reverse();
   return reanswe.concat(0, answer).join('');
}