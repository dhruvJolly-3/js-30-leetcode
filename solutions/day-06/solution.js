/**
 * Day 06 — Filter Elements from Array
 * LeetCode: https://leetcode.com/problems/filter-elements-from-array/
 * Difficulty: Easy
 * Topic: Array / Higher Order Functions
 *
 * Approach:
 * - Loop through arr manually (no built-in filter allowed)
 * - Call fn(arr[i], i) — if truthy, push element into new array
 * - Return new array (original untouched)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// ✅ My Solution
var filter = function(arr, fn) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

// 📝 Note:
// Key difference from map — we push arr[i] (original value), NOT fn(arr[i], i)
// fn is used only as a condition (truthy/falsy check)
// Truthy in JS: any value except 0, "", null, undefined, NaN, false
// This is exactly how Array.filter() works under the hood!

// Test
console.log(filter([0,10,20,30], (n) => n > 10));       // [20,30]
console.log(filter([1,2,3], (n, i) => i === 0));        // [1]
console.log(filter([-2,-1,0,1,2], (n) => n + 1));       // [-2,-1,1,2]
