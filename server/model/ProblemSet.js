const ProblemSet = [

    {
        "id": "1",
        "title": "1. FizzBuzz",
        description: `#### Problem Statement
        
### Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to \`n\`.

But for multiples of three it should output \`"Fizz"\` instead of the number and for the multiples of five output \`"Buzz"\`. For numbers which are multiples of both three and five output \`"FizzBuzz"\`.
### Example

#### Example 1

    Input: n = 3
    Output: ["1","2","Fizz"]

#### Example 2

    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"] 

#### Example 3

    Input: n = 15
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

### Constraints

    * \`1 <= n <= 10^4\`
    `,
        solution: `### Solution

You must be familiar with the [Fizz Buzz](https://en.wikipedia.org/wiki/Fizz_buzz) problem. The problem is simple, but it is a good example to demonstrate how to write code in a structured way. The problem is also a good example to demonstrate how to write unit tests.

#### Approach 1: Brute Force

##### Intuition

We can use brute force to solve this problem. We can iterate through each number from 1 to \`n\` and check if it is divisible by 3, 5 or both.

##### Algorithm

We use a loop to iterate through each number from 1 to \`n\`. For each number, we check if it is divisible by 3, 5 or both.

##### Code

    class Solution:
        def fizzBuzz(self, n: int) -> List[str]:
            ret = []
            for num in range(1, n + 1):
                divisible_by_3 = (num % 3 == 0)
                divisible_by_5 = (num % 5 == 0)
                num_ans_str = ""
                
                if divisible_by_3:
                    # Divides by 3
                    num_ans_str += "Fizz"
                if divisible_by_5:
                    # Divides by 5
                    num_ans_str += "Buzz"
                if not num_ans_str:
                    # Not divisible by 3 or 5
                    num_ans_str = str(num)
                    
                # Append the current answer str to the ans list
                ret.append(num_ans_str)
                
            return ret

##### Complexity Analysis

    * Time complexity: \`O(N)\`, where \`N\` is the number \`n\`.
    * Space complexity: \`O(1)\`. We only need to store the output list.


#### Approach 2: One-pass

##### Intuition

We can use one-pass to solve this problem. We can iterate through each number from 1 to \`n\` and check if it is divisible by 3, 5 or both.

##### Algorithm

We use a loop to iterate through each number from 1 to \`n\`. For each number, we check if it is divisible by 3, 5 or both.

##### Code

    class Solution:
        def fizzBuzz(self, n: int) -> List[str]:
            ret = []
            for num in range(1, n + 1):
                divisible_by_3 = (num % 3 == 0)
                divisible_by_5 = (num % 5 == 0)
                num_ans_str = ""
                
                if divisible_by_3:
                    # Divides by 3
                    num_ans_str += "Fizz"
                if divisible_by_5:
                    # Divides by 5
                    num_ans_str += "Buzz"
                if not num_ans_str:
                    # Not divisible by 3 or 5
                    num_ans_str = str(num)
                    
                # Append the current answer str to the ans list
                ret.append(num_ans_str)
                
            return ret

##### Complexity Analysis

    * Time complexity: \`O(N)\`, where \`N\` is the number \`n\`.
    * Space complexity: \`O(1)\`. We only need to store the output list.


#### Approach 3: One-pass with string concatenation

##### Intuition

We can use one-pass to solve this problem. We can iterate through each number from 1 to \`n\` and check if it is divisible by 3, 5 or both.

##### Algorithm

We use a loop to iterate through each number from 1 to \`n\`. For each number, we check if it is divisible by 3, 5 or both.

##### Code

    class Solution:
        def fizzBuzz(self, n: int) -> List[str]:
            ret = []
            for num in range(1, n + 1):
                divisible_by_3 = (num % 3 == 0)
                divisible_by_5 = (num % 5 == 0)
                num_ans_str = ""
                
                if divisible_by_3:
                    # Divides by 3
                    num_ans_str += "Fizz"
                if divisible_by_5:
                    # Divides by 5
                    num_ans_str += "Buzz"
                if not num_ans_str:
                    # Not divisible by 3 or 5
                    num_ans_str = str(num)
                    
                # Append the current answer str to the ans list
                ret.append(num_ans_str)
                
            return ret

##### Complexity Analysis

    * Time complexity: \`O(N)\`, where \`N\` is the number \`n\`.
    * Space complexity: \`O(1)\`. We only need to store the output list.


#### Approach 4: One-pass with hash table

##### Intuition

We can use one-pass to solve this problem. We can iterate through each number from 1 to \`n\` and check if it is divisible by 3, 5 or both.

##### Algorithm

We use a loop to iterate through each number from 1 to \`n\`. For each number, we check if it is divisible by 3, 5 or both.

##### Code

    class Solution:
        def fizzBuzz(self, n: int) -> List[str]:
            ret = []
            for num in range(1, n + 1):
                divisible_by_3 = (num % 3 == 0)
                divisible_by_5 = (num % 5 == 0)
                num_ans_str = ""
                
                if divisible_by_3:
                    # Divides by 3
                    num_ans_str += "Fizz"
                if divisible_by_5:
                    # Divides by 5
                    num_ans_str += "Buzz"
                if not num_ans_str:
                    # Not divisible by 3 or 5
                    num_ans_str = str(num)
                    
                # Append the current answer str to the ans list
                ret.append(num_ans_str)
                
            return ret

##### Complexity Analysis

    * Time complexity: \`O(N)\`, where \`N\` is the number \`n\`.
    * Space complexity: \`O(1)\`. We only need to store the output list.


#### Approach 5: One-pass with string concatenation and hash table

##### Intuition

We can use one-pass to solve this problem. We can iterate through each number from 1 to \`n\` and check if it is divisible by 3, 5 or both.

##### Algorithm

We use a loop to iterate through each number from 1 to \`n\`. For each number, we check if it is divisible by 3, 5 or both.

##### Code

    class Solution:
        def fizzBuzz(self, n: int) -> List[str]:
            ret = []
            for num in range(1, n + 1):
                divisible_by_3 = (num % 3 == 0)
                divisible_by_5 = (num % 5 == 0)
                num_ans_str = ""
                
                if divisible_by_3:
                    # Divides by 3
                    num_ans_str += "Fizz"
                if divisible_by_5:
                    # Divides by 5
                    num_ans_str += "Buzz"
                if not num_ans_str:
                    # Not divisible by 3 or 5
                    num_ans_str = str(num)
                    
                # Append the current answer str to the ans list
                ret.append(num_ans_str)
                
            return ret
    `,
        "difficulty": "easy",
        testcase: `3
3
5
15`,
        template: `#include<bits/stdc++.h>
using namespace std;

vector<string> fizzBuzz(int n) {
    // code here
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int tc = 1;
    cin >> tc;
    for (int t = 1; t <= tc; t++) {
        int n;cin>>n;
        vector<string> ans = fizzBuzz(n);
        for(auto  i : ans) cout<<i<<" ";
        cout<<endl;
    }
}`,
    },
    {
        id : "2",
        title : "2. Two Sum",
        description : `#### Problem Statement

### Two Sum

Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.

You may assume that each input would have *exactly one solution*, and you may not use the *same* element twice.

You can return the answer in any order.

### Example

#### Example 1

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: \`nums[0] + nums[1] = 2 + 7 = 9\`

#### Example 2

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Explanation: \`nums[0] + nums[2] = 3 + 4 = 6\`

### Example 3

    Input: nums = [3,3], target = 6
    Output: [0,1]
    
### Constraints

    * \`2 <= nums.length <= 10^4\`
    * \`-10^9 <= nums[i] <= 10^9\`
    * \`-10^9 <= target <= 10^9\`
    * **Only one valid answer exists.**

##### Follow-up: Can you come up with an algorithm that is less than \`O(n^2)\` time complexity?
`,
solution : `### Solution

#### Approach 1: Brute Force

##### Intuition

We can use brute force to solve this problem. We can iterate through each element \`x\` and find if there is another value that equals to \`target - x\`.

##### Algorithm

We use a nested loop. For each element \`x\`, we try to find if there is another value that equals to \`target - x\`.

##### Code

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] == target - nums[i]:
                    return [i, j]

##### Complexity Analysis

* Time Complexity: \`O(N^2)\`, where \`N\` is the length of \`nums\`. For each element, we try to find its complement by looping through the rest of array which takes \`O(N)\` time. Therefore, the time complexity is \`O(N^2)\`.
* Space Complexity: \`O(1)\`.



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

* Time Complexity: \`O(N)\`, where \`N\` is the length of \`nums\`. We traverse the list containing \`N\` elements only once. Each look up in the table costs only \`O(1)\` time.
* Space Complexity: \`O(N)\`. The extra space required depends on the number of items stored in the hash table, which stores at most \`N\` elements.

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

* Time Complexity: \`O(N)\`, where \`N\` is the length of \`nums\`. We traverse the list containing \`N\` elements only once. Each look up in the table costs only \`O(1)\` time.
* Space Complexity: \`O(N)\`. The extra space required depends on the number of items stored in the hash table, which stores at most \`N\` elements.

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


`,
        "difficulty": "easy",
        testcase: `3
4 9
2 7 11 15
3 6
3 2 4
2 6
3 3`,
    template : `#include<bits/stdc++.h>
using namespace std;

vector<int> two_sum(vector<int>  arr,int target) {
    // code here
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int tc = 1;
    cin >> tc;
    for (int t = 1; t <= tc; t++) {
        int n,k;cin>>n>>k;
        vector<int> inp(n);
        for(auto &i : inp) cin>>i;
        vector<int> resp = two_sum(inp,k);
        for(auto i : resp) cout<<i<<" ";
        cout<<endl;
    }
}`
    },
    {
        "id": "3",
        "title": "3. Longest Repeating Character Replacement",
        description : `#### Problem Statement

### Longest Repeating Character Replacement
You are given a string \`s\` and an integer \`k\`. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most \`k\` times.

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

    * \`1 <= s.length <= 10^5\`
    * \`s\` consists of only uppercase English letters.
    * \`0 <= k <= s.length\`
`,
solution : `### Approach 1: Sliding Window

##### Intuition

We can think of the problem as finding the longest substring with at most \`k\` characters that are different from the most frequent character.

##### Algorithm

Let's say that we are trying to find the longest substring with at most \`k\` characters that are different from the most frequent character. We can use a sliding window, where the left and right boundaries are the start and end of the window. We use a hashmap to count the number of occurrences of each character in the current window. Then, the number of characters that are different from the most frequent character is the size of the window minus the number of occurrences of the most frequent character. If this number is less than or equal to \`k\`, we can keep expanding the window to the right. Otherwise, we need to shrink the window from the left until the number of characters that are different from the most frequent character is less than or equal to \`k\`.

##### Code

    class Solution:
        def characterReplacement(self, s: str, k: int) -> int:
            counts = collections.Counter()
            max_count = 0
            left = 0
            for right, char in enumerate(s):
                counts[char] += 1
                max_count = max(max_count, counts[char])
                if right - left + 1 - max_count > k:
                    counts[s[left]] -= 1
                    left += 1
            return right - left + 1

##### Complexity Analysis

* Time Complexity: \`O(N)\`, where \`N\` is the length of \`s\`. We iterate through the string once.
* Space Complexity: \`O(1)\`. We only need to store the count for each character.

### Related Topics

* String
* Sliding Window
* Two Pointers  

### Similar Questions

* [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
* [Longest Substring with At Most Two Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/)
* [Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)
* [Longest Substring with At Least K Repeating Characters](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/)
`,
        "difficulty": "medium",
        testcase: `2
4 2
ABAB
8 1
AABABBA`,
    template : `#include<bits/stdc++.h>
using namespace std;

int longest_repeating_character_replacement(string s,int k){
    // code here
}

int main() {
    ios_base::sync_with_stdio(0);
    cin.tie(0); cout.tie(0);
    int tc = 1;
    cin >> tc;
    for (int t = 1; t <= tc; t++) {
        int n,k;cin>>n>>k;
        string inp;
        cin>>inp;
        int resp = longest_repeating_character_replacement(inp,k);
        cout<<resp<<endl;
    }
}`
    },


    
    
]

module.exports = ProblemSet;