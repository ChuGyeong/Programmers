function solution(balls, share) {
  // factorial 함수 정의
  function factorial(n) {
    let answer = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
      answer *= i;
    }
    return answer;
  }

  // ballsCshare 계산
  const ballsCshare = factorial(balls) / (factorial(share) * factorial(balls - share));

  return Number(ballsCshare.toString());
}