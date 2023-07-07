function solution(record) {
   let answer = [],
      output = [],
      userTable = {};
   let state = '',
      userId = '',
      nickname = '';

   for (let i = 0; i < record.length; i++) {
      answer = record[i].split(' ');
      state = answer[0];
      userId = answer[1];

      if (answer.length > 2) {
         nickname = answer[2];
      }

      if (state === 'Enter') {
         userTable[userId] = nickname;
         output.push({ userId: userId, message: '님이 들어왔습니다.' });
      } else if (state === 'Leave') {
         output.push({ userId: userId, message: '님이 나갔습니다.' });
      } else if (state === 'Change') {
         userTable[userId] = nickname;
      }
   }

   const result = output.map(log => userTable[log.userId] + log.message);

   return result;
}