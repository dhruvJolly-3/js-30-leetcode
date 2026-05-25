/**
 * Day 08 — Function Composition
 * LeetCode: https://leetcode.com/problems/function-composition/
 * Difficulty: Easy
 * Topic: Array / Higher Order Functions / Closures
 *
 * Approach:
 * - Loop right to left through functions array
 * - Keep updating x = functions[i](x) each step
 * - Empty array edge case handled automatically — loop never runs, x returned as is
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var compose = function(functions) {
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

// 📝 Note:
// functions[i] is itself a function — call it with (x)
// Loop goes right to left because f(g(h(x))) means h runs first
// Empty array → loop never runs → x returned as is (identity function)
// x is updated each iteration — carries result forward like val in reduce

// Test
const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(fn1(4)); // 65

const fn2 = compose([]);
console.log(fn2(42)); // 42
