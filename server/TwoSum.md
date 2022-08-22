#### Problem Statement

### Two Sum

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have *exactly one solution*, and you may not use the *same* element twice.

You can return the answer in any order.

### Example

#### Example 1

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: `nums[0] + nums[1] = 2 + 7 = 9`

#### Example 2

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Explanation: `nums[0] + nums[2] = 3 + 4 = 6`

### Example 3

    Input: nums = [3,3], target = 6
    Output: [0,1]
    
### Constraints

  * `2 <= nums.length <= 10^4`
  * `-10^9 <= nums[i] <= 10^9`
  * `-10^9 <= target <= 10^9`
  * **Only one valid answer exists.**

##### Follow-up: Can you come up with an algorithm that is less than `O(n^2)` time complexity?

### Solution

#### Approach 1: Brute Force

##### Intuition

We can use brute force to solve this problem. We can iterate through each element `x` and find if there is another value that equals to `target - x`.

##### Algorithm

We use a nested loop. For each element `x`, we try to find if there is another value that equals to `target - x`.

##### Code

    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            for i in range(len(nums)):
                for j in range(i + 1, len(nums)):
                    if nums[j] == target - nums[i]:
                        return [i, j]

##### Complexity Analysis

  * Time Complexity: `O(N^2)`, where `N` is the length of `nums`. For each element, we try to find its complement by looping through the rest of array which takes `O(N)` time. Therefore, the time complexity is `O(N^2)`.
  * Space Complexity: `O(1)`.



#### Approach 2: Two-pass Hash Table

##### Intuition 

To improve our run time complexity, we need a more efficient way to check if the complement exists in the array. If the complement exists, we need to look up its index. What is the best way to maintain a mapping of each element in the array to its index? A hash table.

##### Algorithm

We use a hash table to store the value and its index. We iterate through the array and check if the complement exists in the hash table. If it does, we return the index of the complement and the current index. Otherwise, we add the current value and its index to the hash table.

##### Code

    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            hash_table = {}
            for i, num in enumerate(nums):
                if target - num in hash_table:
                    return [hash_table[target - num], i]
                hash_table[num] = i

##### Complexity Analysis

  * Time Complexity: `O(N)`, where `N` is the length of `nums`. We traverse the list containing `N` elements only once. Each look up in the table costs only `O(1)` time.
  * Space Complexity: `O(N)`. The extra space required depends on the number of items stored in the hash table, which stores at most `N` elements.

#### Approach 3: One-pass Hash Table

##### Intuition

It turns out we can do it in one-pass. While we iterate and inserting elements into the table, we also look back to check if current element's complement already exists in the table. If it exists, we have found a solution and return immediately.

##### Algorithm

We iterate through the array and insert each element into the table. If the current element's complement already exists in the table, we have found a solution and return immediately.

##### Code

    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            hash_table = {}
            for i, num in enumerate(nums):
                if target - num in hash_table:
                    return [hash_table[target - num], i]
                hash_table[num] = i

##### Complexity Analysis

  * Time Complexity: `O(N)`, where `N` is the length of `nums`. We traverse the list containing `N` elements only once. Each look up in the table costs only `O(1)` time.
  * Space Complexity: `O(N)`. The extra space required depends on the number of items stored in the hash table, which stores at most `N` elements.

### Related Topics
  
    * Array
    * Hash Table  
  
### Similar Questions

  * [3Sum](https://leetcode.com/problems/3sum/)
  * [4Sum](https://leetcode.com/problems/4sum/)
  * [Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
  * [Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/)
  * [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)
  * [Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)
  * [Two Sum Less Than K](https://leetcode.com/problems/two-sum-less-than-k/)


