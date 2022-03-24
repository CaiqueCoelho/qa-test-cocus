# Caíque Coelho - QA Test - COCUS
Welcome to my test! <img src="https://github.com/CaiqueCoelho/CaiqueCoelho/blob/master/wave.gif" width="30px">   
24/02/2022

##### 1 Web Automation

###### 1.1 - Cypress

For web automation I chose Cypress in this case, writing the automation in javascript. The option for Cypress was made thinking about the best practices and most modern tool available on the market today, with the possibility of surveying flaky tests, integration with plugins for visual regression tests, accessibility and others. with Cypress we also have the facility to mock API responses if you want to test just a subset of APIs or just do a front-end integration test. For the automation of these tests, no mock was used.

###### 1.2 Automation structure

To facilitate the organization and follow good clean code practices, I chose to structure the automation using Page Objects.
Defining a parent base page (BasePage) with features that can be reused by all inherited child pages, for example by the HomePage page.
On the parent page I implemented the location of elements such options in header.
In addition to the Page Objects pages that are responsible for abstracting the locations of the elements, I separated the path to the elements in the pages in another file in order to make the Page Object cleaner and centralize constants in other files.
For the location of the elements I mostly used the ids of the elements whenever possible and in the absence of ids I used XPATH.

<img src="https://github.com/CaiqueCoelho/qa-test-cocus/blob/main/qa-test-cocus.drawio.png" width="900px">

###### 1.3 Asserts

For the validation of the flows, the automations were written in a separate file just for the tests (Contact.test.js). To organize the executions, I used Mocha's describe and it to separate the information and provide documentation of what is being executed and what should be expected.
For assertions I used should from Chai.
In addition to the simple flow assertions, possible accessibility issues with AXE were also validated.

###### 1.4 Responsiveness
To validate the site's responsiveness, tests were performed in the viewport for both desktop and smartphones such as iPhone 6, Samsumg S10, iPhone 6 horizontally (landscape) and iPad2.

###### 1.5 How to run the tests
1. Make sure you have node and npm installed, for more details [check here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. After verifying that everything is installed, access the directory in the terminal
3. Install project dependencies with `npm i`
4. And run the project with Cypress iterative player with `npm run debug`
5. After opening the window with the tests, click on the suites to run, one per time, for example by clicking on Contact.test.js and the test will start to run in the Google Chrome browser
6. Or run the tests headless with `npm run test`
7. To check the test report in html, access the file in the directory "cypress/report/mochawesome-report" opening the file mochawesome.html, to see the report it is necessary to clone the project and open the html file in the browser or you can check [clicking here](https://caiquecoelho.github.io/qa-test-cocus/mochawesome-report/mochawesome.html)
8. Cypress also generates a video with the execution of the tests in the directory "cypress/videos" you can see it by cloning the project and accessing the directory or accessing the directory in git itself [click here](https://github.com/CaiqueCoelho/qa-test-cocus/tree/main/cypress/videos)

Or you you can use Docker:
1. `npm run build`
2. `npm run up`

###### 1.6 Accessibility bugs
1.

##### 1.7 Parallel Test and Cross Browser
For this test I implemented the Github Action (GHA) creating 5 workflows that will run in Github in parallel in each push trigger:

- test-deskop-chrome
- test-deskop-electron
- test-flights
- test-login-mobile
- test-login

Regarding cross browser testing, Cypress is compatible with Chrome, Firefox and Electron, for the test I chose to create the flows for Chrome and Electron.
You can check all GHA workflows jobs running [here](https://github.com/CaiqueCoelho/qa-test-cocus/actions) 

### TODO
DESCRIBE ACCESIBILITY BUGS
DESCRIBE FAILED TEST CASES
PAGE OBJECTS DRAW IO
ATUALIZAR README EXPLICANDO PQ ESCOLHI CYPRESS E ATUALIZAR LINKS DOS VIDEOS E REPORTS E IMAGENS