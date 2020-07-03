This project exploits the axios and github API to get a list of pullrequest (pr) from github based on the user input and the range of date.

The function takes in four parameters **_ getPullRequest() _**

1. The user name of the person whoes repo you want access to.
2. The name of the repo you want to access.
3. The start date "YYYY-MM-DD" of the pr's
4. The end date "YYYY-MM-DD" of the pr's

example

**_ getPullRequest('torvalds','linux','2020-01-15','2020-06-22'); _**

1.The function will replace all null dates from JSON with the date "1970-01-01T00:00:00.000Z"
2.If the function returns and empty array [] increase the delay time in setTimeout by 1000ms to compensate for a laggy network
