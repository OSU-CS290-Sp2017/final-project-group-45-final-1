/*before handlebars*/
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
			reseponse.write(index);
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


server.listen(3000);