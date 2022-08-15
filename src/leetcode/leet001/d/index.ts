// This solution uses a lookup table to minimize the number of passes
// This solution is similar to `a` but iterates over the `nums` array at most just once.
// Time complexity is O(n)
export default function (nums: number[], target: number): number[] {
  const list = [];
  let objectiveNum;
  let i = nums.length;

  for (i; i--;) {
    objectiveNum = target - nums[i];
    if (list[objectiveNum]) return [list[objectiveNum], i];
    list[nums[i]] = i;
  }
  throw new Error("sum not found");
}
