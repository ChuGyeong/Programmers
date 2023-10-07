function solution(my_string) {
  const item = my_string.split(" ");

  let answer = parseInt(item[0]);

  for (let i = 1; i < item.length; i += 2) {
    const operator = item[i];
    const operand = parseInt(item[i + 1]);

    if (operator === "+") {
      answer += operand;
    } else if (operator === "-") {
      answer -= operand;
    }
  }

  return answer;
}
