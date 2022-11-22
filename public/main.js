var socket = io();

socket.on('messages', (data)=>{
    console.log(data);
    render(data);
});
function render (data){
    var html = data.map((message, index)=>{
        return (`
        <div class="message">
         <strong>${message.nickname}</strong> dice:
         <p>${message.text}</p>
        </div>        
        `);
    }).join(' ');
    document.getElementById('messages').innerHTML = html;
} 