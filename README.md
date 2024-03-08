# About

This uses [the leetcode-query npm package](https://jacoblin.cool/LeetCode-Query/) to request user stats from Leetcode's unpublished API.

Based on the package docs, I *think* that this type of request is not rate limited, has no auth, and is public, so I hope it can be used with consistent results. It works in this tiny proof of concept to get 3 diferent profiles in a row and does not require adding session tokens or csrf tokens from an authenticated web request.

# Running the script
1. clone the repo to your computer
2. `cd lcquery`
3. `npm install`
4. `node .` to run the script

You should see output like this:
```
Leetcode stats for mikesboyle
[
  { difficulty: 'All', count: 583, submissions: 2675 },
  { difficulty: 'Easy', count: 235, submissions: 1220 },
  { difficulty: 'Medium', count: 320, submissions: 1378 },
  { difficulty: 'Hard', count: 28, submissions: 77 }
]
// same as above for 2 more users
```
In `index.js`, you can add different usernames or play with the script to see what else is available in the `user` object returned from the API.