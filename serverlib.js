const socketIO = require('socket.io');
const steem = require("steem");
var io;

exports.listen = function(server){
    io = socketIO.listen(server);
    io.sockets.on('connection', function(socket){
        answerToClient(socket);
    });
}


   
function answerToClient(socket){
    socket.on('insert event name here', function(data){
        socket.emit('server response', {msg: data.message});
    });
};



