Clone the git url like in desktop

Open a command prompt / command line window and enter the following:
   npm install -g http-server
Change directory to the code folder in the command line window, e.g:
   cd \desktop\typeAheadCPC
Start the server with this command:
   http-server
Open your browser and go to the address http://localhost:8080 
   you will see the local page of typeAhead

-------------code explanation follows:-----------------

In app.js file, created a app module and fetching data from json and storing in main controller scope.

In dataFactory.js, written a code for fetching data from json stored in json folder.

Crated a components folder in which typeAhead component code is present.

Passing data from component to main controller through component's callback.

Using media queries for responsive layout.

Using SASS & complie it through compass from grunt command.

Using different npm packages for minification of CSS, JS, and copy of fonts from src folder to production code(gen).

Using src folder for developer code & gen folder for production code and loading production(minification) files in the index.html.

Showing 'Data not found' message incase of no result of search.

Created font icons with the help of fontforge for search,phone & doc icons.

Note: Please reach out to me incase of any doubt at (ashishmadaan1991@gmail.com or 09718179733).