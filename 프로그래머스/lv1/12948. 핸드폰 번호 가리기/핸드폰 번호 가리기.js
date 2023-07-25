function solution(phone_number) {
   let lastNum = phone_number.slice(-4);
   let asterisks = '*'.repeat(phone_number.slice(0, -4).length);
   return asterisks + lastNum;
}
