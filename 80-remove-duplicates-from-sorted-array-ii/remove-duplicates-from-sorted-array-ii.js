/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    let newValueCount = null;
    let prevValue = null;

    for (let i = 0; i < nums.length; i++) {
        if (prevValue !== nums[i]) {
            prevValue = nums[i];
            newValueCount = 1;
            nums[k++] = nums[i];
        } else {
            newValueCount++;
            if (newValueCount < 3) {
                nums[k++] = nums[i];
            }
        }
    }

    return k;
};