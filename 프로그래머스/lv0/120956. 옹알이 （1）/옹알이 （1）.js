function solution(babbling) {
let babblingArr = ["aya", "ye", "woo", "ma"];
let word = "";
let answer = 0;

for(let i=0; i<babbling.length; i++) {
    word = babbling[i].toString();
    for(let j=0; j<babblingArr.length; j++) {
        word = word.replaceAll(babblingArr[j], ' ');    
    }
    if( word.trim().length == 0) {
        answer++;
    }
}
    
return answer;
}