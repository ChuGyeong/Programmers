function solution(s) {
  let cnt = 0;
  let zero = 0;

  while (s !== "1") {
    cnt++;
    const removedZeros = s.replace(/0/g, "");
    zero += s.length - removedZeros.length;
    s = removedZeros.length.toString(2);
  }

  return [cnt, zero];
}