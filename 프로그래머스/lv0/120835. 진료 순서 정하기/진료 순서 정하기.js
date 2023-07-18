function solution(emergency) {
   let sortArr = [...emergency].sort((a, b) => b - a);
   let answer = emergency.map(item => sortArr.indexOf(item) + 1);
   return answer;
}