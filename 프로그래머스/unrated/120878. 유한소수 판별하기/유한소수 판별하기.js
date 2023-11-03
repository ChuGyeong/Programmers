function solution(a, b) {
  const g = gcd(a, b);
    
  a /= g;
  b /= g;
    
  while (b % 2 === 0) {
    b /= 2;
  }
  while (b % 5 === 0) {
    b /= 5;
  }
    
  if (b === 1) {
    return 1;
  } else {
    return 2;
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}