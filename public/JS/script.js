$('document').ready(() => {
    var socket = io("http://localhost:3000")
    // socket.on('server-send', (data) => {
    //     console.log(data)
    // })
    $('.button1').click(()=>{
        socket.emit('client-send')
    })
    socket.on('server-send',()=>{
        $('.text1').append('io.sockets.emit')
    })
    $('.button2').click(()=>{
        socket.emit('one-to-one-client')
    })
    socket.on('one-to-one-server',()=>{
        $('.text2').append('one-to-one')
    })
    $('.button3').click(()=>{
        socket.emit('one-to-orther-client')
    })
    socket.on('one-to-orther-server',()=>{
        $('.text3').append('one-to-orther')
    })
    $('.reload').click(()=>{
        socket.emit('client-reload')
    })
    socket.on('server-reload',()=>{
        location.reload()
    })
})