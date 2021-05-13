const socket = io();

let n = 0;

$('#chat').hide();

$('#login-btn').click(() => {
    socket.emit('login', {
        name: $('#login-inp').val()
    })
    $('#login').hide();
    $('#chat').show()
});

$('#btn-send').click(() => {
    socket.emit('send_msg', {
        msg: $('#inp').val()

    })
    $('#inp').val("");
    $('.emojionearea-editor').text("");
});

socket.on('recieved_msg', (data) => {
    $('#list').append(`<li><strong>${data.name}</strong> : ${data.msg}</li>`);
})


$('#theme').click(() => {
    if (n % 2 == 0) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1528458876861-544fd1761a91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzh8fHRleHR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    } else {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1616763880410-744958efc093?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGV4dHVyZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    }

    n++;
})

// setInterval(() => {
//     $('#list').empty()
//     console.log("setinterval")
// }, 30000);