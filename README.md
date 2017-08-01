Running Locally:

Make sure you have Node.js installed.

git clone git@github.com:AshishMadaan/CPCAssignment.git

cd CPCAssignment
npm install -g http-server
http-server

typeAhead app should now be running on localhost:8080.


-------------code explanation follows:-----------------

In app folder, created a app.module.js for creating a app module and we can pass dependencies here to app level (like ng-route etc.) and created a app controller for fetching data from json and storing it in app controller scope.

In dataFactory.js, written a code for fetching data from json stored in json folder.

Crated a components folder in which typeAhead component is present.

Passing data from component to main controller through component's callback.

Using media queries for responsive layout.

Using SASS & complie it through compass from grunt command.

Using different npm packages for minification of CSS, JS, and copy of fonts from src folder to production code(gen).

Using src folder for developer code & gen folder for production code and loading production(minification) files in the index.html.

Showing 'Data not found' message incase of no result of search.

Created font icons with the help of fontforge for search,phone & doc icons.

Note: Please reach out to me incase of any doubt at (ashishmadaan1991@gmail.com or 09718179733).
