const express = require("express")
const cors = require("cors")
const app = express()
app.use( cors() ) 

const courses = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']

app.get('/json', (req, res) => {
    res.json(courses.join(', '))
} )

app.get('/html', (req, res) => {
    const tmpArr = courses.map( el => el === 'Backend' ? `<li><b>${el}</b></li>` : `<li>${el}</li>`)
    const strg = `<ul>${tmpArr.join()}</ul>`
    res.send(strg)
})

app.get('/react', (req, res) => {
    res.json(courses)
} )

app.listen( 5000, () => {
    console.log('Hey the server started!')
} )
