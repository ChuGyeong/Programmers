function solution(keyinput, board) {
  let [x, y] = [0, 0];
  const [width, height] = board;

  for (const key of keyinput) {
    if (key === "up") y++;
    else if (key === "down") y--;
    else if (key === "left") x--;
    else if (key === "right") x++;

    if (Math.abs(x) > width / 2 || Math.abs(y) > height / 2) {
      if (key === "up") y--;
      else if (key === "down") y++;
      else if (key === "left") x++;
      else if (key === "right") x--;
    }
  }

  return [x, y];
}