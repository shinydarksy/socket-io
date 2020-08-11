const express = require('express')
const { Socket } = require('dgram')
const app = express()
const http = require('http').createServer(app)
const port = 3000
let io = require('socket.io')(http)
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('./public'))
app.get('/', (req, res) => {
  res.render('main')
})
io.on('connection',(socket)=>{
    socket.on('client-send',()=>{
        io.sockets.emit('server-send')
    })
    socket.on('one-to-one-client',()=>{
        socket.emit('one-to-one-server')
    })
    socket.on('one-to-orther-client',()=>{
        socket.broadcast.emit('one-to-orther-server')
    })
    socket.on('client-reload',()=>{
        console.clear()
        io.sockets.emit('server-reload')
    })
})

http.listen(port)