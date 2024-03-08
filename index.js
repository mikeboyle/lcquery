const { LeetCode } = require('leetcode-query');

const leetcode = new LeetCode(); // client

const getUser = async (username) => {
  const user = await leetcode.user(username);
  return user;
};

const printUserInfo = async (usernames) => {
  for (const username of usernames) {
    user = await getUser(username);
    console.log(`Leetcode stats for ${username}`);
    console.log(user.matchedUser.submitStats.acSubmissionNum);
  }
};

const USERNAMES = ['mikesboyle', 'wwright1991', 'brightcodenyc'];
printUserInfo(USERNAMES);
