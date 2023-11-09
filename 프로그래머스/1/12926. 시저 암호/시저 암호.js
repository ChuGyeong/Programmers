function solution(s, n) {
    return s.split('').map(function(char) {
        if (char === ' ') return char;
        let base = (char === char.toUpperCase()) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        let diff = (char.charCodeAt(0) - base + n) % 26;
        return String.fromCharCode(base + diff);
    }).join('');
}