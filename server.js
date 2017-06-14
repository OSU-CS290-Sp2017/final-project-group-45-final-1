var port = process.env.PORT || 3000;
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var file = require('./eventData.json');
app.use(express.static('public'));

var eventData = require('./eventData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
    res.render('eventPage', {
    title: 'Planit',
    event:eventData, 
    showModal: true
    })
}); 

app.get('/events/:index',function(req,res){
	console.log("Web address parameters for req:",req.params);
	var index = req.params.index;
	var element = eventData[index];
	if(element){
	res.render('eventPage',{
		title:'Planit',
		event: [eventData[index]],
		showModal: false
	});
	}
});


app.get('*', function(req, res){
	res.status(404).render('404Page');
});


app.listen(port, function() {
    console.log("Open port at", port);
});
//app.use(express.bodyParser());
app.post('/events/createEvent', function (req, res, next) {
	var event = eventData[req.params.index];
	var fileStr = file;
	var item ={
		date: req.body,
		event: req.body
	};
//	event.item.push(item);
	console.log(req.body);
	fileStr.push(item);
	fs.writeFile('./eventData.json', JSON.stringify(fileStr));
	res.end();
});
	
