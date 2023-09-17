function solution(my_string) {
  let sum = 0;
  let num = "";

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];

    if (!isNaN(char)) {
      num += char;
    } else {
      if (num !== "") {
        sum += parseInt(num);
        num = "";
      }
    }
  }

  if (num !== "") {
    sum += parseInt(num);
  }

  return sum;
}