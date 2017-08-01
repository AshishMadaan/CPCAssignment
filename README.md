TypeAhead Search : 01/08/2017

Introduction-------------------
•	This is a Type Ahead search component build on Angular1.6 which acts independently as a component.
•	The result will start showing as soon as you start typing in the search box.


Installation-------------------
•	Make sure you have Node.js installed.

•	git clone git@github.com:AshishMadaan/CPCAssignment.git
•	cd CPCAssignment
•	npm install -g http-server
•	http-server

•	typeAhead app should now be running on localhost:8080.


Code Explanation-----------------

•	In app folder, created a app.module.js for creating a app module and we can pass dependencies here to app level (like ng-route etc.).
•	Using a app controller for fetching data from JSON file and storing it in the app controller scope.
•	In dataFactory.js, written a code for fetching data from JSON file.
•	Crated a components folder in which typeAhead component is present.
•	Passing data from component to main controller through component's callback.
•	Using media queries for responsive layout.
•	Using SASS preprocessor & compile it through compass module using grunt command.
•	Using different npm packages for minification of CSS, JS, and copy of fonts from src folder to production code(dest) folder
•	Using src folder for developer code & dest folder for production code and loading production(minification) files in the index.html.
•	Showing 'Data not found' message in case of no result of search.
•	Created font icons with the help of font forge for search, phone & doc icons.


Note: Please reach out to me incase of any doubt at (ashishmadaan1991@gmail.com or 09718179733).


Author:
Ashish Madaan
