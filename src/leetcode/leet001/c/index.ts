// This solution is the same as `b` but optimizes the number of iterations but preventing doule work
// Time complexity is O(log n)
export default function (nums: number[], target: number): number[] {
  let outerI, innerI, outerN;
  const length = nums.length;
  outerI = length;
  for (outerI; outerI--;) {
    outerN = nums[outerI];

    innerI = outerI;
    for (innerI; innerI--;) {
      if (nums[innerI] + outerN === target) return [innerI, outerI];
    }
  }

  throw new Error("sum not found");
}
