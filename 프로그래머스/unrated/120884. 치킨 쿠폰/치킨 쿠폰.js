function solution(chicken) {
  let coupons = chicken
  let service = 0;

  while (coupons >= 10) {
    const free = Math.floor(coupons / 10);
    service += free;
    coupons -= free * 10;
    coupons += free;
  }

  return service;
}