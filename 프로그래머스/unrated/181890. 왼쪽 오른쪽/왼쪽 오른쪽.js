function solution(str_list) {
    const l = str_list.indexOf('l');
    const r = str_list.indexOf('r');

    // "l"과 "r" 중 먼저 나오는 것 확인하기
    if (l === -1 && r === -1) return [];
    else if (l !== -1 && (r === -1 || l < r)) return str_list.slice(0, l);
    else return str_list.slice(r + 1);
}