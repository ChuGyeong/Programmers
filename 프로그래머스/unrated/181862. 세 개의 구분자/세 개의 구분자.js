function solution(myStr) {
  const arr = ["a", "b", "c"];
  
  let answer = [];
  let str = "";
  
  for (let i = 0; i < myStr.length; i++) {
    if (arr.includes(myStr[i])) {
      if (str !== "") {
        answer.push(str);
        str = "";
      }
    } else {
      str += myStr[i];
    }
  }
  
  if (str !== "") {
    answer.push(str);
  }
  
  return answer.length > 0 ? answer : ["EMPTY"];
}