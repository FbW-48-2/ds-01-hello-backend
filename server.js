// Define an array with the DCI course modules at the top of the file:

const moduleDCI = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']

const { request, response } = require('express');
// Setup an Express server and let it run on port 5000
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())


app.get("/json", (request, response) => {
    // Send the whole modules array as JSON to the browser
    console.log("you basterd want to set up a route, right?");
    response.json(moduleDCI)
})

// Bonus Task 1

const textStg = moduleDCI.join(', ')

app.get("/text", (request, response) => {
    console.log("this is the 'text' route 'mdf'");
    response.json(textStg)
})


const liItems = moduleDCI.map(list => {
    if (list === 'Backend') {
        return `<li><b>${list}</b></li>`
    }
    return `<li>${list}</li>`
}).join('');

console.log(liItems);

const ul = `<ul>${liItems}</ul>`

app.get("/html", (request, response) => {
    console.log("this is the route 'html'");
    response.send(ul)
})



app.listen(5000, () => {
    // Provide a success message that the server started up
    console.log('API has started successfully on PORT 5000 💪');
})