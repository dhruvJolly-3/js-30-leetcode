/**
 * Day 09 — Return Length of Arguments Passed
 * LeetCode: https://leetcode.com/problems/return-length-of-arguments-passed/
 * Difficulty: Easy
 * Topic: Rest Operator
 *
 * Approach:
 * - Use rest operator ...args to collect all arguments into an array
 * - Return args.length (property, not a function — no parentheses!)
 *
 * Time Complexity: O(1)
 * Space Complexity: O(n)
 */

// ✅ My Solution
var argumentsLength = function(...args) {
    return args.length;
};

// 📝 Note:
// ...args (rest operator) collects ALL passed arguments into one array
// .length is a PROPERTY not a METHOD — no () needed
// args.length()  ❌ wrong
// args.length    ✅ correct

// Test
console.log(argumentsLength(5));             // 1
console.log(argumentsLength({}, null, "3")); // 3
console.log(argumentsLength());              // 0
