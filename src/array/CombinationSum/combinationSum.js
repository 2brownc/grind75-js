function combinationSum(candidates, target) {
  const answer = [];

  const dfs = (i, cur, total) => {
    if (total === target) {
      answer.push([...cur]);
      return null;
    }

    if (
      i >= candidates.length
      || total > target
    ) {
      return null;
    }

    cur.push(candidates[i]);
    dfs(i, cur, total + candidates[i]);

    cur.pop();
    dfs(i + 1, cur, total);
  }

  dfs(0, [], 0);

  return answer;
}

const candidates = [2, 3, 6, 7];
const target = 7;

console.log(combinationSum(candidates, target));

export { combinationSum };