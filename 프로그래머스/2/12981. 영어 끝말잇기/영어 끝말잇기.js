function solution(n, words) {
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let preWord = words[i - 1];

    if (words.indexOf(word) !== i) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    
    if (i && preWord.slice(-1) !== word.slice(0, 1)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
  }
 
  return [0, 0];
}