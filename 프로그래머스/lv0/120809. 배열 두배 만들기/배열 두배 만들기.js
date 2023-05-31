function solution(numbers) {
    var answer = [];
    answer = numbers;
    answer.forEach((item, index) => {
        answer[index] = item * 2;
    });
    return answer;
}