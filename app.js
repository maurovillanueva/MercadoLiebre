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
const htpptLogin = '/login'
const htpptRegister = '/register'
// html
const homeHtml = 'home.html'
const loginHtml = 'login.html'
const registerHtml = 'register.html'

// Define the static file path
app.use(express.static(public));

app.get(hhtpRaiz, (req, res) => {
    res.sendFile(homeHtml)
})

app.get(htpptHome, (req, res) => {
    res.sendFile(homeHtml)
})

app.get(htpptLogin, (req, res) => {
    res.sendFile(loginHtml)
})

app.get(htpptRegister, (req, res) => {
    res.sendFile(registerHtml)
})

app.listen(process.env.PORT || port , () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(__dirname)
})
