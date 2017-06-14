/*before handlebars*/
/*
var fs = require('fs');
var http = require('http');
var port = process.env.PORT || 3000;

var server = http.createServer(requestHandler);


var index =0;
var js = 0;
var css = 0;

function requestHandler(request, response){
	if(request.url === '/' || request.url === "/index.html" || request.url === ''){
		if(index === 0){
			fs.readFile('public/index.html', function(error, data){
				if (error){
					throw error;
				}
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/html");
				response.write(data);
				index = data;
				response.end();
			});
		}
		else{
			response.statusCode = 200;
			response.setHeader("Content-type", "text/html");
			response.write(index);
			response.end();
		}
	}
	else if(request.url === '/style.css'){
		if(css === 0){
			fs.readFile('public/style.css', function(error, data){
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/css")
				response.write(data)
				css = data;
				response.end();
			});
		}
		else{
			response.statusCode = 200;
			response.setHeader ("Content-Type", "text/css");
			response.write(css);
			response.end();
		}	
	}
	else if(request.url === '/index.js'){
		if(js === 0){
			fs.readFile('public/index.js', function(error, data){
				response.statusCode = 200;
				response.setHeader("Content-Type", "text/js")
				response.write(data);
				js = data;
				response.end();
			});
		}
		else{
			response.statusCode = 200;
			response.setHeader ("Content-Type", "text/js");
			response.write(js)
		}
	}

	else{
		fs.readFile('public/404.html', function(error, data){
		response.statusCode = 404;
		response.setHeader("Content-Type", "text/html");
		response.write(data)
		response.end();
		});

	}
}


server.listen(3000);*/
/*
Name: Thomas Huynh
 * Write your Express server in this file as described in README.md.
 */
var port = process.env.PORT || 3000;

var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
app.use(express.static('public'));

//import data from twitData.json using 'require'
var eventData = require('./eventData');


app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

//load twitPage using 'render' if the user inputs '/'
app.get('/', function(req, res) {
    res.render('eventPage', {
    title: 'Planit',
     //set the variable 'twitData' equal to the data from twitData.json
    event:eventData, 
    showModal: true
    })
}); 

app.get('/twits/:index',function(req,res){
	console.log("Web address parameters for req:",req.params);
	var index = req.params.index;
	var element = eventData[index];
	if(element){
	res.render('eventPage',{
		title:'Planit',
		twit: [eventData[index]],
		showModal: false
	});
	}
});


app.get('*', function(req, res) {
    res.status(404).render('404Page', {
        title: 'Planit'
    });
})


app.listen(port, function() {
    console.log("Open port at", port);
});