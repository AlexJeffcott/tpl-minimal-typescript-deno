// This solution uses a lookup table to minimize the number of passes
// It iterates over the `nums` array twice, once to create the lookup table (and return early if the solution is `[target/2, target/2]`), and once to check the lookup array for `target-num`.
// Time complexity is O(n)
export default function (nums: number[], target: number): number[] {
  const list = [];
  const halfTarget = target / 2;
  let result = [];
  let objectiveNum, i;

  i = nums.length;
  for (i; i--;) {
    const numsI = nums[i];
    if (numsI === halfTarget) result.push(i);
    if (result.length === 2) return result;
    list[numsI] = i;
  }

  i = nums.length;
  for (i; i--;) {
    objectiveNum = target - nums[i];
    if (list[objectiveNum] && list[objectiveNum] !== i) {
      result = [list[objectiveNum], i];
      break;
    }
  }

  return result;
}
