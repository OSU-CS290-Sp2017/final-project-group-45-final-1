var addEvent = document.getElementById('add-event-button');

addEvent.addEventListener('click', function(){
	var displayForm = document.getElementsByClassName('hidden');
	for( var i = 0; i< displayForm.length; i++){
		displayForm[i].style.display= 'block';
	}
});
var closeButton = document.getElementsByClassName('modal-close-button')[0];

closeButton.addEventListener('click', function(){
	var hideForm = document.getElementsByClassName('hidden');
	for(var i = 0; i<hideForm.length; i++){
		hideForm[i].style.display = 'none';
	}
	var date = document.getElementById('event-input-date');
	date.value = "";
	var event = document.getElementById('event-input-event');
	event.value = "";
});

var acceptButton = document.getElementById('modal-accept-button');
acceptButton.addEventListener('click', newEvent);
/*
var acceptButton = document.getElementsByClassName('modal-accept-button')[0];

acceptButton.addEventListener('click', function(){
	/*
	var p1 = document.createElement('p');
	p1.classList.add('event-date');
	var text = document.getElementById('event-input-date').value;
	var p1Text = document.createTextNode(text);
	p1.appendChild(p1Text);
	var p2 = document.createElement('p');
	p2.classList.add('event-text');
	text = document.getElementById('event-input-event').value;
	var p2Text = document.createTextNode(text);
	p2.appendChild(p2Text);
	var div = document.createElement('div');
	div.classList.add('event-content');
	div.appendChild(p1);
	div.appendChild(p2);
	var button = document.createElement('button');
	button.classList.add('delete-button');
	var x = document.createTextNode('X');
	button.appendChild(x);
	var art = document.createElement('article');
	art.classList.add('event');
	art.appendChild(div);
	art.appendChild(button);
	var event = document.getElementsByClassName('event-container')[0];
	event.appendChild(art);
	var hideForm = document.getElementsByClassName('hidden');
	for(var i = 0; i<hideForm.length; i++){
		hideForm[i].style.display = 'none';
	}
	var date = document.getElementById('event-input-date');
	date.value = "";
	var event = document.getElementById('event-input-event');
	event.value = "";

});
*/
var searchButton = document.getElementById('navbar-search-button');

searchButton.addEventListener('click', function(){
	console.log("==Search button pressed");
	search();
});
function search(){
	console.log("==In search function");
	var input = document.getElementById('navbar-search-input').value;
	var event = document.getElementsByClassName('event');
	for(var i = 0; i<event.length; i++){
		event[i].classList.remove('hide');
		var eventText = event[i].getElementsByClassName('event-text')[0].textContent;
		var eventDate = event[i].getElementsByClassName('event-date')[0].textContent;
		var x = eventText.indexOf(input);
		var y = eventDate.indexOf(input);
		if(x === -1 && y === -1){
			event[i].classList.add('hide');
		}
	}
}

//Open the drop down
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
var jan = document.getElementById('January');

jan.addEventListener('click', function(){
	var event = document.getElementsByClassName('event');
	for(var i = 0; i< event.length; i ++){
		event[i].classList.remove('hide');
		var date = event[i].getElementsByClassName('event-date')[0].textContent;
		var y = date.indexOf('January');
		var z = date.indexOf('january');
		if(y=== -1 && z === -1){
			event[i].classList.add('hide');
		}			
	}	
});
var feb = document.getElementById('February');

feb.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('February');
                var z = date.indexOf('february');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var mar = document.getElementById('March');

mar.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('March');
                var z = date.indexOf('march');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var apr = document.getElementById('April');

apr.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('April');
                var z = date.indexOf('april');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var may = document.getElementById('May');

may.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('May');
                var z = date.indexOf('may');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});

var jun = document.getElementById('June');

jun.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('June');
                var z = date.indexOf('june');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});

var jul = document.getElementById('July');

jul.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('July');
                var z = date.indexOf('july');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var aug = document.getElementById('August');

aug.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('August');
                var z = date.indexOf('august');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var sep = document.getElementById('September');

sep.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('September');
                var z = date.indexOf('september');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var oct = document.getElementById('October');

oct.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('October');
                var z = date.indexOf('october');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var nov = document.getElementById('November');

nov.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('November');
                var z = date.indexOf('november');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var dec = document.getElementById('December');

dec.addEventListener('click', function(){
        var event = document.getElementsByClassName('event');
        for(var i = 0; i< event.length; i ++){
                event[i].classList.remove('hide');
                var date = event[i].getElementsByClassName('event-date')[0].textContent;
                var y = date.indexOf('December');
                var z = date.indexOf('december');
                if(y=== -1 && z === -1){
                        event[i].classList.add('hide');
                }
        }
});
var home = document.getElementById('home');

home.addEventListener('click', function(){
	var event = document.getElementsByClassName('event');
	for(var i = 0; i <event.length; i++){
		event[i].classList.remove('hide');
	}

});
function newEvent(){
	var inputDate = document.getElementById('event-input-date').value;
	var inputEvent = document.getElementById('event-input-event').value;
	var url = "./createEvent";
	var request = new XMLHttpRequest();
	request.open('POST', '');
	request.setRequestHeader('Content-Type', 'application/json');
	var eve={
		date: inputDate,
		event: inputEvent
	};
	console.log(JSON.stringify(eve));
	request.send(JSON.stringify(eve));
	
}
window.addEventListener('DOMContentLoaded', function(event){
	var main = document.querySelector('main');
	if (main) {
    		main.addEventListener('click', help);
 	}
});
function help(){
	var closeButton = event.target;
        var paren = event.target.parentNode;
        if(closeButton.classList.contains('delete-button')){
                var main = paren.parentNode;
                main.removeChild(paren);
        }
}
