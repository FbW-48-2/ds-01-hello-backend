const express = require("express")
const cors = require("cors")
const app = express()
app.use( cors() ) 

//serving the data using the build folder
app.use(express.static('client/build'))

const courses = ['HTML/CSS', 'JavaScript', 'DOM', 'SPA', 'Backend', 'Fullstack', 'Final Project']

//data as string
app.get('/json', (req, res) => {
    res.json(courses.join(', '))
} )

//data as html string
app.get('/html', (req, res) => {
    const tmpArr = courses.map( el => el === 'Backend' ? `<li><b>${el}</b></li>` : `<li>${el}</li>`)
    const strg = `<ul>${tmpArr.join()}</ul>`
    res.send(strg)
})

//data as plain json for fetching with react
app.get('/react', (req, res) => {
    res.json(courses)
} )

//get the single items using array index
app.get('/:index', (req, res) => {
    const {index} = req.params
    res.json(courses[index])
})


//setting a route for deploying the build folder
app.use('/build', express.static('client/build'))




app.listen( 5000, () => {
    console.log('Hey the server started!')
} )
