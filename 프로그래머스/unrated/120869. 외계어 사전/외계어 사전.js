function solution(spell, dic) {
  spell.sort();

  for (let i = 0; i < dic.length; i++) {
    const x = dic[i].split("").sort().join("");

    if (x === spell.join("")) {
      return 1;
    }
  }

  return 2;
}