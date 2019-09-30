# Survey Reports

## About
Survey Reports application provides an easy to use interface for viewing surveys, their statistics and other details like themes, questions in each theme, average rating per question etc. <br>

The application fetches survey results from a server and presents all the surveys in one place with their high level statistics. Each survey is represented visually as a 'Card' in the home page with the survey name and it's metadata. Each card will have a 'View Survey Details' button which the user can click to go to the survey details page to view more details about each survey. <br>
Survey details page will show the different themes that a particular survey focussed on. Themes are also visually represented using cards. Each theme card will show the name and average rating per theme and will have a different border colour based on the theme rating. Themes with higher rating ( > 4 ) will have a green border, and yellow for ratings between 3.5 and 4 and red border for themes with rating < 3.5.<br>
Each theme will have a list of questions that the participants responded to. And each question will have an average rating for itself. These details will be displayed in the theme card when the user clicks on the 'View responses in detail' link. The colour coding based on the rating value is applied to individual question ratings as well.

### Design approach
The basic design approach was to present a minimalistic, easy-to-use interface which conveys the high level information to the user at a glance. For example, in the survey details page, user can understand easily how their company fared in each theme just by looking at the colour of the respective theme card. <br>
The focus was to keep the UI simple with only the bare minimum data displayed by default, and provide options for the user to choose when they want to see detailed data, like questions asked in each theme and their rating.<br>
Further granularity of theme data is possible (for eg: displaying details of how each participant responded to a specific question), but was omitted to keep the interface simple. This could be added in further iterations of the application, if required.

### Features that could be added in the future:
- Sorting of themes in the Survey Details page based on rating.
- Display individual responses for each question in the theme card.
- A new page to display the details of each participant and their responses on each themes.

### Test coverage:
Unit tests are provided for each component. Integration tests are not written yet. I am exploring the react-testing-library(@testing-library/react) to write integration tests, which I am not well versed with, at the moment.

## Steps to run the application

Install Git (https://git-scm.com) (if you want to clone, or you may choose to download the repository directly)<br>
Node.js (https://nodejs.org/en/)<br>
Download this repository - `git clone https://github.com/mithunprem/surveyreports.git`

## Install dependencies

In the project directory, you can run:

### `npm install`

## To start the application

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
The app is ready to be deployed!
