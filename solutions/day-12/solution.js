/**
 * Day 12 — Add Two Promises
 * LeetCode: https://leetcode.com/problems/add-two-promises/
 * Difficulty: Easy
 * Topic: Promises / Async
 *
 * Approach:
 * - Use Promise.all to wait for both promises simultaneously
 * - .then() receives array of resolved values
 * - Return sum of values[0] + values[1]
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

// ✅ My Solution
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(values => {
        return values[0] + values[1];
    });
};

// 📝 Note:
// Promise.all takes an ARRAY of promises → waits for ALL to resolve
// .then(values => ...) receives array of resolved values → [2, 5]
// Must return Promise.all — .then() return inside stays in its scope!
// async keyword allows await usage inside if needed

// Test
const p1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const p2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
addTwoPromises(p1, p2).then(console.log); // 7
