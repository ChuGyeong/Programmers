function solution(balls, share) {
  function factorial(n) {
    let answer = BigInt(1);
    for (let i = BigInt(2); i <= BigInt(n); i++) {
      answer *= i;
    }
    return answer;
  }

  const ballsCshare = factorial(balls) / (factorial(share) * factorial(balls - share));

  return Number(ballsCshare.toString());
}