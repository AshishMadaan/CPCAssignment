TypeAhead Search : 01/08/2017

Introduction-------------------<br /><br />
•	This is a Type Ahead search component build on Angular1.6 which acts independently as a component.<br />
•	The result will start showing as soon as you start typing in the search box.


Installation-------------------<br /><br />
•	Make sure you have Node.js installed.<br />

•	git clone git@github.com:AshishMadaan/CPCAssignment.git<br />
•	cd CPCAssignment<br />
•	npm install -g http-server<br />
•	http-server<br />
•	application should now be running on localhost:8080.


Code Explanation-----------------<br /><br />

•	In app folder, created a app.module.js for creating a app module and we can pass dependencies here to app level (like ng-route etc.).<br />
•	Using a app controller for fetching data from JSON file and storing it in the app controller scope.<br />
•	In dataFactory.js, written a code for fetching data from JSON file.<br />
•	Crated a components folder in which typeAhead component is present.<br />
•	Passing data from component to main controller through component's callback.<br />
•	Using media queries for responsive layout.<br />
•	Using SASS preprocessor & compile it through compass module using grunt command.<br />
•	Using different npm packages for minification of CSS, JS, and copy of fonts from src folder to production code(dest) folder<br />
•	Using src folder for developer code & dest folder for production code and loading production(minification) files in the index.html.<br />
•	Showing 'Data not found' message in case of no result of search.<br />
•	Created font icons with the help of font forge for search, phone & doc icons.<br /><br />

Note: Please reach out to me incase of any doubt at (ashishmadaan1991@gmail.com or 09718179733).<br /><br />


Author:<br />
Ashish Madaan
