const ProblemSet = [

    {
        "id": "1",
        "title": "FizzBuzz",
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

    
]

module.exports = ProblemSet;