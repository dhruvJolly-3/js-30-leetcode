/**
 * Day 04 — Counter II
 * LeetCode: https://leetcode.com/problems/counter-ii/
 * Difficulty: Easy
 * Topic: Closures / Objects
 *
 * Approach:
 * - Keep two variables: init (original) and current (working copy)
 * - increment/decrement modify current
 * - reset sets current back to init (not 0!)
 * - Both init and current are captured in closure
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
const createCounter = function(init) {
    let current = init;
    return {
        increment: () => {
            current = current + 1;
            return current;
        },
        decrement: () => {
            current = current - 1;
            return current;
        },
        reset: () => {
            current = init;
            return current;
        }
    }
};

// 📝 Note:
// Key insight: init and current are SEPARATE variables
// init never changes — it is the source of truth for reset()
// current tracks all increments/decrements
// Closure keeps both variables alive between calls

// Test
const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
