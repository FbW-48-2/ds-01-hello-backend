const express = require("express")
const cors = require("cors")
const app = express()

// REGISTER MIDDLEWARE => configure the API
app.use( cors() ) // => allow access from any FRONTEND !


// { title: "Hellooo" } => Javascript data
// { "title": "Helloo" } => JSON => JavaScript data in a string / file => Data EXCHANGE format 

const arrDciModules = [
    'HTML/CSS', 
    'JavaScript', 
    'DOM',
    'SPA',
    'Backend', 
    'Fullstack', 
    'Final Project'
]

// SENDING RESPONSES
// res.json() => to send back JSON data () => used 99% of time to return a response
// res.send() => to send back all OTHER data (text only, HTML, etc)


// HOME ROUTE
app.get("/", (req, res) => {
    
    res.send(`<h1>View DCI modules as...</h1> 
        <p><a href="/html">HTML</a></p>
        <p><a href="/text">Text</a></p>
        <p><a href="/json">JSON</a></p>
    `)
})

app.get("/json", (req, res) => {
    res.json( arrDciModules ) // returns NAKED javascrip data
})

// CALL CENTER AGENT 
// => listens on a route, does the work, and sends the response
const textController = (req, res) => {
    res.send(arrDciModules.join(", "))
}

app.get("/text", textController) // attach controller (=call center agent) to a route

app.get("/html", (req, res) => {
    let modulesHtml = arrDciModules.map(module => {
        return "<li>" + (module == "Backend" ? `<b>${module}</b>` : module) + "</li>"
    })
    
    res.send(`<ul>${modulesHtml.join("")}</ul>`)
})

app.get("/add", (req, res) => {

    arrDciModules.push( "Job right away" )
    res.json(arrDciModules)
})


const PORT = 5000
app.listen(PORT, () => { 
    console.log(`Server started on port: ${PORT}`)
    console.log("http://localhost:5000")
})
