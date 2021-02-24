const express = require("express")
const app = express()

const arrDciModules = [
    'HTML/CSS', 
    'JavaScript', 
    'DOM',
    'SPA',
    'Backend', 
    'Fullstack', 
    'Final Project'
]

app.get("/", (req, res) => {
    res.send(`<h1>View DCI modules as...</h1> 
        <p><a href="/html">HTML</a></p>
        <p><a href="/text">Text</a></p>
        <p><a href="/json">JSON</a></p>
    `)
})

app.get("/json", (req, res) => {
    res.json(arrDciModules)
})

app.get("/text", (req, res) => {
    res.send(arrDciModules.join(", "))
})

app.get("/html", (req, res) => {
    let modulesHtml = arrDciModules.map(module => {
        return "<li>" + (module == "Backend" ? `<b>${module}</b>` : module) + "</li>"
    })
    res.send(`<ul>${modulesHtml.join("")}</ul>`)
})


let port = 5000
app.listen(port, () => { 
    console.log("Server started on port: " + port)
})

