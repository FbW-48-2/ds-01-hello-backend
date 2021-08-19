# Express API - Exercise - Routing, Routing, Routing...

Let's setup a simple API:

* Create a file server.js file in this folder
* Install express via `npm install express` (or short: npm i express)
* Setup an Express server and let it run on port 5000
* Provide a success message that the server started up
* Define an array with the DCI course modules at the top of the file:

    `['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']`
* Setup one route /json: 
    * Send the whole modules array as JSON to the browser

Start your API with nodemon on the terminal (so the API restarts on each code change...): 

`nodemon server.js`

Test the output of your /json route by visiting http://localhost:5000/json in your browser

## Bonus Task - Some JS Training :)

Create a route /text: 
* Send the list of course modules comma separated as a string back to the browser
    * output in the browser should be like that => HTML / CSS, JavaScript, DOM, ...
* Hint: The array method "join" might be helpful for that. Lookup W3C or MDN, in case you forgot about that one :)

Create another route /html: 
* Send the course entries as HTML list to the browser
    * Do so by converting the course modules array to an array of HTML strings 
        * e.g.: "React" should become `<li>React</li>`    
        * Use the map function for that
    * After conversion: Concatenate the li tags together to a string

Test the output of your /html route by visiting http://localhost:5000/html in your browser


## Bonus Task - We need to be bold in life...

Adapt the HTML output in route /html:

* The module "Backend" should get printed with bold text in the browser (so within HTML b tags)

## Bonus - Create a mini frontend

* Create a react-app in a subfolder "client"
    - `npx create-react-app client`

* Start the API and React in parallel
    * Start the API in the terminal using nodemon (if not running already)
    * Open a second terminal in VsCode (with the + Icon)
    * Change into the folder "client" and run "npm start" to start React

* In App.js - fetch the course modules from your API and display them
    * either fetch them on a button click or in a useEffect hook on load

DONE!
