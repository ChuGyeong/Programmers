function solution(intStrs, k, s, l) {
  return intStrs.map(str => parseInt(str.substring(s, s + l)))
                .filter(num => num > k);
}