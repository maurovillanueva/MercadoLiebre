const express = require('express')
const app = express()
const path = require('path')

const port = 3000

// views
const views = path.join(__dirname, 'views/')
// public
const public = path.join(__dirname, 'public/')
// hhtp routes
const hhtpRaiz = '/'
const htpptHome = '/home'
const htpptLogin = '/Login'
const htpptRegister = '/Register'
// html
const homeHtml = 'home.html'
const loginHtml = 'Login.html'
const registerHtml = 'Register.html'

// Define the static file path
app.use(express.static(public));

app.get(hhtpRaiz, (req, res) => {
    res.sendFile(views, homeHtml)
})

app.get(htpptHome, (req, res) => {
    res.sendFile(views, homeHtml)
})

app.get(htpptLogin, (req, res) => {
    res.sendFile(views, loginHtml)
})

app.get(htpptRegister, (req, res) => {
    res.sendFile(views, registerHtml)
})

app.listen(process.env.PORT || port , () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})
