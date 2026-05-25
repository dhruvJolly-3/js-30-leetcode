/**
 * Day 05 — Apply Transform Over Each Element in Array
 * LeetCode: https://leetcode.com/problems/apply-transform-over-each-element-in-array/
 * Difficulty: Easy
 * Topic: Array / Higher Order Functions
 *
 * Approach:
 * - Manually loop through arr using for loop
 * - Apply fn(arr[i], i) for each element — passing value AND index
 * - Push result into new array
 * - Return new array (do not mutate original)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// ✅ My Solution
var map = function(arr, fn) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr.push(fn(arr[i], i));
    }
    return newarr;
};

// 📝 Note:
// Problem explicitly says DO NOT use built-in Array.map()
// fn receives two args: current element value + its index
// We must pass both — fn(arr[i], i) — not just fn(arr[i])
// This is essentially how Array.map() works under the hood!

// Test
console.log(map([1,2,3], (n) => n + 1));       // [2,3,4]
console.log(map([1,2,3], (n, i) => n + i));    // [1,3,5]
console.log(map([10,20,30], () => 42));         // [42,42,42]
