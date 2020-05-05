Would You Rather? project for Udacity's [React Developer Nanodegree program](https://www.udacity.com/course/react-nanodegree--nd019).

## Instructions

`git clone https://github.com/LCSmith87/Would-You-Rather && cd Would-You-Rather`

`npm install && npm start`

## About

Would You Rather? is a simple application that lets users answer the age old question "Would you rather fight 100 duck sized horses or 1 horse sized duck?"

Udacity requires code to follow the following guidelines


### Udacity Style Guides

[HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)

[CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)

[JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)

[Git Style Guide](https://udacity.github.io/git-styleguide/)

### Project Rubric

#### Application Setup

- [x] Requires only `npm install` and `npm start` to get installed and launched
- [x] An updated README that describes the project and has instructions for installing and launching

#### Login Flow

- [x] There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
- [x] The application works correctly regardless of which user is selected.
- [x] The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
- [x] Once the user logs in, the home page is shown.
- [x] Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.

#### Application Functionality

- [x] The answered and unanswered polls are both available at the root.
- [x] The user can alternate between viewing answered and unanswered polls.
- [x] The unanswered questions are shown by default.
- [x] The name of the logged in user is visible on the page.
- [x] The user can navigate to the leaderboard.
- [x] The user can navigate to the form that allows the user to create a new poll.
- [x] Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
- [x] A polling question links to details of that poll.
- [x] The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- [x] The details of the poll are available at questions/:question_id.
- [x] When a poll is clicked on the home page, the following is shown: the text “Would You Rather”, the picture of the user who posted the polling question; and the two options.
- [x] For answered polls, each of the two options contains the following: the text of the option, the number of people who voted for that option; the percentage of people who voted for that option.
- [x] The option selected by the logged in user should be clearly marked.
- [x] When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
- [x] The application asks the user to sign in and shows a 404 page if that poll does not exist.
- [x] Upon voting in a poll, all of the information of the answered poll is displayed.
- [x] The user’s response is recorded and is clearly visible on the poll details page.
- [x] When the user comes back to the home page, the polling question appears in the “Answered” column.
- [x] The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
- [x] The form is available at /add.
- [x] The application shows the text “Would You Rather” and has a form for creating two options.
- [x] Upon submitting the form, a new poll is created and the user is taken to the home page.
- [x] The new polling question appears in the correct category on the home page.
- [x] The Leaderboard is available at /leaderboard.
- [x] Each entry on the leaderboard contains the following: the user’s name, picture, number of questions the user asked, and the number of questions the user answered.
- [x] Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
- [x] The app contains a navigation bar that is visible on all of the pages.
- [x] The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.
- [x] The data that’s initially displayed is populated correctly from the backend.
- [x] The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.

#### Architecture

- [x] The store is the application’s source of truth.
- [x] Components read the necessary state from the store; they do not have their own versions of the same state.
- [x] There are no direct API calls in the components' lifecycle methods.
- [x] Most application state is managed by the Redux store. State-based props are mapped from the store rather than stored as component state.
- [x] Form inputs and controlled components may have some state handled by the component.
- [x] Updates are triggered by dispatching action creators to reducers.
- [x] Reducers and actions are written properly and correctly return updated state to the store.
- [x] The code is structured and organized in a logical way.
- [x] Components are modular and reusable.

### Additional Features

TODO: add additional features


## Technology

Built with ReactJS using [react-create-app](https://github.com/facebook/create-react-app)

- React.JS
- Redux
- React Router

