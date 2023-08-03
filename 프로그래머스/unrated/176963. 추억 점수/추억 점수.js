function solution(name, yearning, photo) {
   return photo.map(group =>
      group.reduce((acc, item) => {
         const idx = name.indexOf(item);
         if (idx !== -1) acc += yearning[idx];
         return acc;
      }, 0),
   );
}

/*
function solution(name, yearning, photo) {
   let answer = [];
   let sum = [];

   for (let i = 0; i < name.length; i++) {
      let obj = {};
      obj[name[i]] = yearning[i];
      answer.push(obj);
   }

   photo.forEach(group => {
      let result = [];
      group.forEach(item => {
         let foundChar = answer.find(char => char[item]);
         if (foundChar) {
            result.push(foundChar[item]);
         } else {
            result.push(0);
         }
      });
      sum = [...sum, result.reduce((acc, cur) => acc + cur, 0)];
   });

   return sum;
}
*/