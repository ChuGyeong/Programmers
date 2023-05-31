function solution(array, height) {
  let answer = 0;
  const filteredArray = array.filter(function (item) {
    return item > height;
  });
  answer = filteredArray.length;
  return answer;
}