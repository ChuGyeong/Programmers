function solution(score) {
  const avgs = score.map((scores, index) => {
    const avg = scores.reduce((sum, score) => sum + score, 0) / score[0].length;
    return { avg, index };
  });

  avgs.sort((a, b) => b.avg - a.avg);

  const rank = Array(score.length).fill(0);
  let current = 1;
  avgs.forEach((avg, i) => {
    if (i > 0 && avg.avg !== avgs[i - 1].avg) {
      current = i + 1;
    }
    rank[avg.index] = current;
  });

  return rank;
}
