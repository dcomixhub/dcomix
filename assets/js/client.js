const steem = require("steem");
const io = require('socket.io-client');
var socket = io.connect();

var element = function(id){
	return document.getElementById(id);
}

var tool1_text = element('text');
var tool1_proceed = element('proceed-talkToServer');

var tool2_username = element('username');
var tool2_proceed = element('proceed-interactWithSteem');
var tool2_test = element('test');



if(socket !== undefined){
	console.log('Connection to server successful!');


	tool1_proceed.addEventListener('click', function() {
		socket.emit('insert event name here', {message: tool1_text.value});
	});


	tool2_proceed.addEventListener('click', function() {
		steem.api.getAccounts([tool2_username.value], function(err, result) {
			console.log(JSON.stringify(result[0]));
			tool2_test.innerHTML = JSON.stringify(result[0]);
		});		
	});

	
	socket.on('server response', function(data){
		alert("The server is up and running ! your message was : " + data.msg);
	});
}