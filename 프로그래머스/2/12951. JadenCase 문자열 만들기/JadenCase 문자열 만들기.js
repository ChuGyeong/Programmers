function solution(s) {
    s = s.toLowerCase()
    let answer = s.split(" ").map(s => {
        let arr = s.split("")
        if(arr[0] != null)
           arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }).join(' ');

    return answer;
}