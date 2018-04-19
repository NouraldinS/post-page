# post-page
A page that has the basic functionality of posting and viewing posts and storing everything in a json file.

## Steps
1. Clone and understand how the project currently works
2. Focus at first on the router, if you want you can remove the `switch` and do `if` statments instead
3. Create a folder database
4. Add `dbConnection.js dbBuild.js dbBuild.sql` to your database
5. Add `/queries` folder to your database
6. You're going to need 2 queries, one for getting posts and one for inserting to the database.
7. Make the 2 queries as you see fit.
8. Adjust the `handlePosts` and `handleGetData` handlers so that they get their data from your database instead of `database.json` 
