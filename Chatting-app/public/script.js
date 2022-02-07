const socket = io();

$('#chat-box').hide();
$('#send-btn').click(()=>{
    const msgvalue = $('#inp').val();
    console.log(msgvalue);
    if(msgvalue.length>0){
        socket.emit('send-msg',{
            msg:msgvalue
        })
        $('#inp').val("");
    }
    
});

socket.on('receive-msg',(data)=>{
    $('#chat').append(`<li class="data"><span class="fw-bold">${data.username}</span> : <span>${data.msg}</span></li>`)
})

$('#login-btn').click(()=>{
    const username = $('#username').val();
    //if(username.length>0){
        socket.emit('login',{
            username : username
        })
    //}
    
    $('#login').hide();
    $('#chat-box').show();
    $('#username').val("");
})
