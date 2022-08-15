// This solution is somewhat naive as it uses nested iteration.
// Time complexity is O(c^n)

export default function (nums: number[], target: number): number[] {
  let outerI, innerI, outerN;
  const length = nums.length;
  outerI = length;
  for (outerI; outerI--;) {
    outerN = nums[outerI];

    innerI = length;
    for (innerI; innerI--;) {
      if (innerI === outerI) continue;
      if (nums[innerI] + outerN === target) return [innerI, outerI];
    }
  }

  throw new Error("sum not found");
}
