const express = require('express');
const { pathToFileURL } = require('url');
const path = require('path');

const app = express()

/**
 * running server 
 */
app.listen(3000, () => {
    console.log('Aplication running on 3000 port')
})

/**
 * routes
 */


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './home.html'))
})
app.get('/empresa', (req, res) => {
    res.sendFile(path.resolve(__dirname, './empresa.html'))
})
app.get('/contacto', (req, res) => {
    res.sendFile(path.resolve(__dirname, './contacto.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './404.html'))
})



































/*
const http = require('http')
const fs = require('fs')

const page_home = fs.readFileSync('./home.html')
const page_empresa = fs.readFileSync('./empresa.html')
const page_contacto = fs.readFileSync('./contacto.html')
const page_error404 = fs.readFileSync('./404.html')

const hostName = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    if (req.url === '/')
        res.write(page_home)
    else if (req.url === '/contacto')
        res.write(page_contacto)
    else if (req.url === '/empresa')
        res.write(page_empresa)
    else
        res.write(page_error404)
    res.end(page_error404)
})

server.listen(port, hostName, () => {
    console.log(`Server running http://${hostName}:${port}/`)
    console.log(`Server running http://localhost:${port}/`)
})*/