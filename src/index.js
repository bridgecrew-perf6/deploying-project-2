

require('dotenv').config()

const express = require('express')
const res = require('express/lib/response')
const server = express()
server.get('api/users',(req, res) => {
    res.json ([
        {id: 1, username: 'foo'},
        {id: 2, username: 'foo'},
        {id: 3, username: 'foo'},
    ])
})

const PORT = process.env.PORT || 8080

server.listen(PORT, ()=> {
    console.log(`listening on ${PORT}`)
})