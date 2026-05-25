/**
 * Day 01 — Create Hello World Function
 * LeetCode: https://leetcode.com/problems/create-hello-world-function/
 * Difficulty: Easy
 * Topic: Closures
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Original Solution
function createHelloWorld() {
    return function(args1, args2) {
        return ("Hello World");
    }
}

// 💡 Improved Solution (handles any number of args using rest operator)
function createHelloWorld() {
    return function(...args) {
        return "Hello World";
    }
}

// 📝 Note:
// Both solutions pass LeetCode, but ...args is more correct
// because it handles 0 to N arguments generically.
// args1, args2 is hardcoded — breaks if 3+ args are passed conceptually.

// Test
const f = createHelloWorld();
console.log(f());           // "Hello World"
console.log(f(1, 2, 3));   // "Hello World"
