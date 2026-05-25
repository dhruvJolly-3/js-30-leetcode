/**
 * Day 07 — Array Reduce Transformation
 * LeetCode: https://leetcode.com/problems/array-reduce-transformation/
 * Difficulty: Easy
 * Topic: Array / Higher Order Functions
 *
 * Approach:
 * - Start with val = init
 * - Loop through nums, updating val = fn(val, nums[i]) each step
 * - If array is empty, loop never runs and init is returned automatically
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var reduce = function(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
};

// 📝 Note:
// val = running accumulator (starts at init)
// i   = array index tracker (0, 1, 2, 3...)
// These are two separate things — dont confuse them!
// Empty array edge case is handled automatically — loop never runs

// Test
console.log(reduce([1,2,3,4], (a, c) => a + c, 0));         // 10
console.log(reduce([1,2,3,4], (a, c) => a + c * c, 100));   // 130
console.log(reduce([], () => 0, 25));                        // 25
