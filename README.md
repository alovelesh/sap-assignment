# Sapient Assignment

Create hacker news using Angular and that has been completed from my end with below functionalities.

1. Desktop design is provided below. Make it responsive for tablet and mobile. Apply your thoughts on what’d be the best user experience for the respective devices
2. Upvote (maintain upvotes using in-browser storage APIs – no service integration, but keep the functionality such that it can be replaced with an service with minimal code change). You can add as many upvotes as you wish.
3. Hide functionality to remove the news from user’s view.
4. Prev | Next link should get the relevant data and all paginated URL's should be bookmarkable.
5. Plot the timeline with the News ID as the x axis and votes on the Y axis. This will match the data in the details table above it. 
6. The timeline chart should update real time as and when the upvote is clicked.
7. ALL MODIFIED DATA like hide and Upvotes – should be persisted and should not reset on browser refresh.
8. Use Angular universal for server side rendering.
9. Add PWA functionality.
10. Show skeleton on data loading.
11. Show loader on API call.
12. Automatic build pipeline is set on heroku.
13. On clicking of user, It will redirect to user detail page.
14. On clicking of title, will redirect to item page.

## Deployment

Navigate to `https://sap-assignment.herokuapp.com` or [click](https://sap-assignment.herokuapp.com) here.

## Deploy on local

1. clone `https://github.com/alovelesh/sap-assignment.git` into your local repository.
2. go to your project directory `cd sap-assignment`.
3. Install all dependencies `npm install`
4. Run `npm run build:ssr && npm run serve:ssr` command.
5. open `http://localhost:4000/`.


## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

