function solution(s) {
    const lastOccurrence = {};
    const result = [];

    for(let i = 0; i < s.length; i++) {
        if(s[i] in lastOccurrence) {
            result.push(i - lastOccurrence[s[i]]);
        } else {
            result.push(-1);
        }
        lastOccurrence[s[i]] = i;
    }

    return result;
}