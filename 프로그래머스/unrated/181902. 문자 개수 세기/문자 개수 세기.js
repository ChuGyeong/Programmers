function solution(my_string) {
    const answer = Array(52).fill(0);

    for (let i = 0; i < my_string.length; i++) {
        const charCode = my_string.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            answer[charCode - 65] += 1;
        } else if (charCode >= 97 && charCode <= 122) {
            answer[charCode - 71] += 1;
        }
    }

    return answer;
}