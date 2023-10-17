function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
}

function solution(n, m) {
    const greatest = gcd(n, m);
    const least = Math.floor((n * m) / greatest);
    return [greatest, least];
}