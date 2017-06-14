var port = process.env.PORT || 3000;
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
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


app.get('*', function(req, res) {
    res.status(404).render('404Page', {
        title: 'Planit'
    });
})


app.listen(port, function() {
    console.log("Open port at", port);
});
app.post('/createEvent', function (req, res, next) {
	console.log("HI");
  var even = eventData[req.params.even];

  if (even) {
    if (req.body && req.body.url) {

      var even = {
        date: req.body.date,
        event: req.body.event
      };


      fs.writeFile('eventData.json', JSON.stringify(eventData), function (err) {
      });

	}
  } else {
    next();
  }
	console.log("===Hi");
});
