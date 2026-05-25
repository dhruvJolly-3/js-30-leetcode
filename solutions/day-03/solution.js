/**
 * Day 03 — To Be Or Not To Be
 * LeetCode: https://leetcode.com/problems/to-be-or-not-to-be/
 * Difficulty: Easy
 * Topic: Closures / Objects
 *
 * Approach:
 * - expect(val) returns an object with two methods
 * - toBe uses strict equality (===) to compare
 * - notToBe uses strict inequality (!==) to compare
 * - throw new Error() is used to signal failure
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
function expect(val) {
    return {
        toBe: (val2) => {
            if (val === val2) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: (val2) => {
            if (val2 !== val) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
}

// 📝 Note:
// val is captured in closure — both toBe and notToBe have access to it
// === is strict equality (checks type + value), not just value
// throw new Error() is the correct way to throw in JS, not just throw "string"

// Test
expect(5).toBe(5);       // true
expect(5).notToBe(null); // true
