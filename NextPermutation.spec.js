const { nextPermutation } = require('./NextPermutation');

describe('NextPermutation', () => {
  test('Example 1', () => {
    const nums = [1, 2, 3];
    nextPermutation(nums);

    expect(nums[0]).toEqual(1);
    expect(nums[1]).toEqual(3);
    expect(nums[2]).toEqual(2);
  });

  test('Example 2', () => {
    const nums = [3, 2, 1];
    nextPermutation(nums);

    expect(nums[0]).toEqual(1);
    expect(nums[1]).toEqual(2); 
    expect(nums[2]).toEqual(3);
  });
});