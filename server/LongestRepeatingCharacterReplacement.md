#### Problem Statement

### Longest Repeating Character Replacement
You are given a string `s` and an integer `k`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most `k` times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

### Examples

#### Example 1

    Input: s = "ABAB", k = 2

    Output: 4

    Explanation: Replace the two 'A's with two 'B's or vice versa.

#### Example 2

    Input: s = "AABABBA", k = 1

    Output: 4

Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4.

### Constraints

  * `1 <= s.length <= 10^5`
  * `s` consists of only uppercase English letters.
  * `0 <= k <= s.length`



### Solution

#### Approach 1: Sliding Window

##### Intuition

We can use sliding window to solve this problem. We use two pointers `left` and `right` to represent a window. We use a hashmap `count` to record the frequency of each character in the current window. We use a variable `maxCount` to record the most frequent character in the current window. We use a variable `maxLen` to record the maximum length of the substring satisfying the constraint.


##### Algorithm

We use a sliding window to solve this problem. We use two pointers `left` and `right` to represent a window. We use a hashmap `count` to record the frequency of each character in the current window. We use a variable `maxCount` to record the most frequent character in the current window. We use a variable `maxLen` to record the maximum length of the substring satisfying the constraint.


##### Code

    class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            n = len(s)
            if n == 1:
                return 1
            left = 0
            right = 0
            max_count = 0
            count = collections.Counter()
            while right < n:
                count[s[right]] += 1
                max_count = max(max_count, count[s[right]])
                if right - left + 1 - max_count > k:
                    count[s[left]] -= 1
                    left += 1
                right += 1
            return right - left

##### Complexity Analysis
  
    * Time Complexity: `O(N)`, where `N` is the length of `s`. We iterate through the string once.
    * Space Complexity: `O(1)`. We only need to store the count of each letter. 



#### Approach 2: Sliding Window

##### Intuition

We can use sliding window to solve this problem. We use two pointers `left` and `right` to represent a window. We use a hashmap `count` to record the frequency of each character in the current window. We use a variable `maxCount` to record the most frequent character in the current window. We use a variable `maxLen` to record the maximum length of the substring satisfying the constraint.


##### Code

    class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            n = len(s)
            if n == 1:
                return 1
            left = 0
            right = 0
            max_count = 0
            count = collections.Counter()
            while right < n:
                count[s[right]] += 1
                max_count = max(max_count, count[s[right]])
                if right - left + 1 - max_count > k:
                    count[s[left]] -= 1
                    left += 1
                right += 1
            return right - left

##### Complexity Analysis

    * Time Complexity: `O(N)`, where `N` is the length of `s`. We iterate through the string once.
    * Space Complexity: `O(1)`. We only need to store the count of each letter.



#### Approach 3: Sliding Window

##### Intuition

We can use sliding window to solve this problem. We use two pointers `left` and `right` to represent a window. We use a hashmap `count` to record the frequency of each character in the current window. We use a variable `maxCount` to record the most frequent character in the current window. We use a variable `maxLen` to record the maximum length of the substring satisfying the constraint.

##### Code

    class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            n = len(s)
            if n == 1:
                return 1
            left = 0
            right = 0
            max_count = 0
            count = collections.Counter()
            while right < n:
                count[s[right]] += 1
                max_count = max(max_count, count[s[right]])
                if right - left + 1 - max_count > k:
                    count[s[left]] -= 1
                    left += 1
                right += 1
            return right - left

##### Complexity Analysis

    * Time Complexity: `O(N)`, where `N` is the length of `s`. We iterate through the string once.
    * Space Complexity: `O(1)`. We only need to store the count of each letter.



#### Approach 4: Sliding Window

##### Intuition

We can use sliding window to solve this problem. We use two pointers `left` and `right` to represent a window. We use a hashmap `count` to record the frequency of each character in the current window. We use a variable `maxCount` to record the most frequent character in the current window. We use a variable `maxLen` to record the maximum length of the substring satisfying the constraint.


##### Code

    class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            n = len(s)
            if n == 1:
                return 1
            left = 0
            right = 0
            max_count = 0
            count = collections.Counter()
            while right < n:
                count[s[right]] += 1
                max_count = max(max_count, count[s[right]])
                if right - left + 1 - max_count > k:
                    count[s[left]] -= 1
                    left += 1
                right += 1
            return right - left

##### Complexity Analysis

    * Time Complexity: `O(N)`, where `N` is the length of `s`. We iterate through the string once.
    * Space Complexity: `O(1)`. We only need to store the count of each letter.

### Related Topics
  
    * [Two Pointers](https://leetcode.com/tag/two-pointers/)
    * [Sliding Window](https://leetcode.com/tag/sliding-window/)  


### Similar Questions
  
    * [Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)



### Note

This question is the same as 424: [https://leetcode.com/problems/longest-repeating-character-replacement/](https://leetcode.com/problems/longest-repeating-character-replacement/)

